import React, { useEffect, useRef } from 'react';

interface SurfacePlotProps {
  reduced: boolean;
}

const N = 52; // grid resolution per axis

/**
 * A response surface, drawn as a wireframe and left to breathe.
 *
 * Three gaussian peaks drift over the plane at different speeds, so the
 * surface never repeats and never lurches. Monochrome by design: the whole
 * point of this pass is that one object carries the hero, not five colours.
 */
const SurfacePlot: React.FC<SurfacePlotProps> = ({ reduced }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const css = getComputedStyle(document.documentElement);
    const read = (t: string, f: string) => css.getPropertyValue(t).trim() || f;
    const fg = read('--fg', '#edeae3');
    const accent = read('--accent', '#56b4e9');

    const rgb = (hex: string) => {
      const h = hex.replace('#', '');
      const v = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
      return [
        parseInt(v.slice(0, 2), 16),
        parseInt(v.slice(2, 4), 16),
        parseInt(v.slice(4, 6), 16),
      ];
    };
    const [fr, fg2, fb] = rgb(fg);
    const [ar, ag, ab] = rgb(accent);

    let width = 0;
    let height = 0;

    let redraw = () => {};
    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      redraw();
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(wrap);

    // Pointer tilts the whole surface a few degrees. Subtle on purpose.
    const tilt = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMove = (event: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      tilt.tx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      tilt.ty = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    if (!reduced) window.addEventListener('pointermove', onMove, { passive: true });

    const peaks = [
      { ax: 0.3, ay: 0.26, sx: 0.17, sy: 0.13, h: 1.05, w: 0.075 },
      { ax: 0.34, ay: 0.3, sx: -0.11, sy: 0.19, h: 0.85, w: 0.13 },
      { ax: 0.26, ay: 0.36, sx: 0.23, sy: -0.15, h: 0.7, w: 0.055 },
      { ax: 0.38, ay: 0.2, sx: -0.29, sy: 0.09, h: 0.58, w: 0.04 },
    ];

    const surface = (u: number, v: number, t: number) => {
      let z = 0;
      for (const p of peaks) {
        const cx = 0.5 + p.ax * Math.sin(t * p.sx);
        const cy = 0.5 + p.ay * Math.cos(t * p.sy);
        const d = (u - cx) ** 2 + (v - cy) ** 2;
        z += p.h * Math.exp(-d / p.w);
      }
      // A shallow ripple, so the plane still has relief on the rare frames
      // where the peaks drift apart.
      z += 0.14 * Math.sin((u * 3.1 + v * 2.3) * Math.PI + t * 0.32);
      // Normalised, so `lift` alone decides how tall the landscape stands.
      return Math.max(0, Math.min(z / 1.5, 1));
    };

    const start = performance.now();
    let raf = 0;
    let visible = true;

    const draw = (now: number) => {
      const t = reduced ? 6 : (now - start) / 1000;

      tilt.x += (tilt.tx - tilt.x) * 0.045;
      tilt.y += (tilt.ty - tilt.y) * 0.045;

      ctx.clearRect(0, 0, width, height);

      // The canvas now spans the whole hero, but the landscape should still
      // read as sitting in a band at the bottom. `band` is that reference, so
      // the geometry stays put while the crests have the entire hero to climb
      // into: nothing is clipped, and nothing has to be flattened to fit.
      // A phone has no room for both a tall landscape and the copy, so the
      // crests sit lower there rather than being veiled more heavily.
      const band = height * (width < 640 ? 0.34 : 0.46);
      const halfW = width * 0.62;
      const halfD = band * 0.32;
      const lift = band * 1.38;
      const originX = width * 0.5;
      const originY = height;

      // Isometric projection with a small pointer-driven skew.
      const project = (u: number, v: number, z: number) => {
        const x = (u - 0.5) * 2;
        const y = (v - 0.5) * 2;
        const rx = x + tilt.x * 0.16;
        const ry = y + tilt.y * 0.12;
        return {
          sx: originX + (rx - ry) * halfW * 0.5,
          sy: originY + (rx + ry) * halfD * 0.5 - z * lift,
          depth: (rx + ry) / 2,
        };
      };

      const grid: { sx: number; sy: number; depth: number; z: number }[][] = [];
      for (let i = 0; i < N; i += 1) {
        const row: { sx: number; sy: number; depth: number; z: number }[] = [];
        for (let j = 0; j < N; j += 1) {
          const u = i / (N - 1);
          const v = j / (N - 1);
          const z = surface(u, v, t);
          row.push({ ...project(u, v, z), z });
        }
        grid.push(row);
      }

      const stroke = (
        pts: { sx: number; sy: number; depth: number; z: number }[]
      ) => {
        // One pass per segment so depth and height can drive the ink.
        for (let k = 0; k < pts.length - 1; k += 1) {
          const a = pts[k];
          const b = pts[k + 1];
          const depth = (a.depth + b.depth) / 2;
          const zAvg = (a.z + b.z) / 2;
          // Nearer lines are stronger; crests pick up the single accent.
          const near = 1 - (depth + 1.4) / 2.8;
          const alpha = 0.05 + near * 0.18 + zAvg * 0.3;
          const warm = Math.max(0, Math.min(1, (zAvg - 0.42) / 0.5));
          const r = Math.round(fr + (ar - fr) * warm);
          const g = Math.round(fg2 + (ag - fg2) * warm);
          const bl = Math.round(fb + (ab - fb) * warm);
          ctx.strokeStyle = `rgba(${r},${g},${bl},${alpha.toFixed(3)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.sx, a.sy);
          ctx.lineTo(b.sx, b.sy);
          ctx.stroke();
        }
      };

      for (let i = 0; i < N; i += 1) stroke(grid[i]);
      for (let j = 0; j < N; j += 1) stroke(grid.map((row) => row[j]));

      raf = !reduced && visible && !document.hidden ? requestAnimationFrame(draw) : 0;
    };

    redraw = () => {
      cancelAnimationFrame(raf);
      raf = 0;
      if (visible && !document.hidden) draw(performance.now());
    };
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      redraw();
    });
    visibilityObserver.observe(wrap);
    document.addEventListener('visibilitychange', redraw);
    redraw();

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener('visibilitychange', redraw);
      window.removeEventListener('pointermove', onMove);
    };
  }, [reduced]);

  return (
    <div ref={wrapRef} className="relative h-full w-full" aria-hidden="true">
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
};

export default SurfacePlot;
