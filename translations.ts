export type Language = 'it' | 'en';

export const translations = {
  it: {
    nav: {
      about: 'Chi sono',
      services: 'Servizi',
      process: 'Processo',
      contact: 'Contatti',
    },
    hero: {
      // Line 1 is index 0. The Hero sets line 1 in the serif italic.
      headline: ['Trasformo', 'dati sanitari', 'in decisioni.'],
      lead: 'Da otto anni lavoro all’incrocio tra dati, tecnologia e sanità: progetto sistemi analitici e prodotti software che trasformano dati complessi in strumenti utilizzabili per decidere.',
      cta: 'Contattami',
      viewWork: 'I servizi',
    },
    about: {
      title: 'Chi sono',
      lead: 'Otto anni dedicati a rendere leggibili i dati di chi cura le persone.',
      paragraphs: [
        'Lavoro nel settore sanitario, dove il compito è sempre lo stesso: prendere dati che nessuno riesce a interpretare e restituirli in una forma su cui si può decidere. L’obiettivo non è un report più curato, ma una decisione più difendibile.',
        'Il mio lavoro attraversa l’intero ciclo del dato: dalla costruzione di pipeline e infrastrutture analitiche fino alla progettazione di dashboard, applicazioni e strumenti utilizzati nei processi decisionali. Quando serve, lavoro direttamente sul codice; quando il problema è organizzativo, il mio ruolo è trasformare esigenze, vincoli e dati in un prodotto che un team possa realmente mantenere e utilizzare.',
        'Prediligo tecnologie open source e architetture riproducibili, verificabili e trasferibili. In sanità non è soltanto una scelta tecnica: significa costruire sistemi che possano essere compresi, mantenuti e verificati anche dopo la fine del progetto.',
      ],
      tools: 'Lavoro principalmente con R, Shiny, DuckDB, SQL, Docker e strumenti moderni di data engineering e sviluppo software.',
      highlights: [
        { label: 'Anni nel settore', value: 8, suffix: '+' },
        { label: 'Progetti consegnati', value: 20, suffix: '+' },
        { label: 'Organizzazioni seguite', value: 10, suffix: '+' },
      ],
    },
    services: {
      title: 'Servizi',
      lead: 'Tre modalità di collaborazione, a seconda del punto in cui ti trovi.',
      items: [
        {
          title: 'Strategia & Analytics',
          description: 'Trasformo dati sanitari frammentati in sistemi informativi utilizzabili per prendere decisioni. Definiamo quali domande meritano una risposta, quali dati servono e come costruire metriche affidabili, comprensibili e riproducibili.',
          features: ['Data strategy', 'KPI & metriche', 'Business intelligence', 'Analisi avanzata'],
        },
        {
          title: 'Data Products & Software',
          description: 'Progetto strumenti che portano l’analisi fuori dal notebook e dentro il lavoro quotidiano: applicazioni, dashboard, pipeline e sistemi analitici progettati per funzionare in produzione e poter essere mantenuti nel tempo.',
          features: ['Data pipelines', 'Analytics applications', 'Dashboard', 'API & integrazioni'],
        },
        {
          title: 'Capability & Training',
          description: 'Affianco team che vogliono portare internamente competenze di analisi e sviluppo, con formazione costruita sui loro dati, strumenti e problemi reali. L’obiettivo non è completare un programma didattico, ma rendere il gruppo autonomo.',
          features: ['R & data analysis', 'Data visualization', 'Reproducible workflows', 'Workshop pratici'],
        },
      ],
    },
    process: {
      title: 'Come lavoro',
      lead: 'Quattro fasi. In ogni momento sai a che punto siamo e cosa viene dopo.',
      steps: [
        {
          title: 'Primo confronto',
          body: 'Mezz’ora per inquadrare il problema e verificare che sia effettivamente quello percepito. Se emerge che non serve un intervento esterno, lo dico apertamente.',
        },
        {
          title: 'Diagnosi',
          body: 'Esame dei dati reali, non della documentazione che li descrive. Stabilisco cosa è possibile ottenere con il patrimonio informativo esistente, cosa richiederebbe nuove raccolte e quali domande i dati non possono risolvere.',
        },
        {
          title: 'Proposta',
          body: 'Perimetro, tempi e condizioni definiti per iscritto. I progetti estesi vengono articolati in fasi autonome, così che ciascuna produca un risultato utilizzabile anche se il percorso si interrompe.',
        },
        {
          title: 'Consegna',
          body: 'Codice funzionante e documentazione utilizzabile da terzi, con formazione di chi dovrà occuparsi della manutenzione. L’obiettivo esplicito è l’autonomia: a distanza di un anno lo stesso lavoro non deve richiedere il mio intervento.',
        },
      ],
    },
    contact: {
      headline: ['Parliamo', 'del progetto.'],
      description: 'Scrivimi anche se il perimetro non è ancora definito: il primo confronto serve esattamente a delimitarlo e a capire se posso essere utile.',
      cta: 'info@alessandroarrigo.com',
    },
  },

  en: {
    nav: {
      about: 'About',
      services: 'Services',
      process: 'Process',
      contact: 'Contact',
    },
    hero: {
      headline: ['I turn health', 'data into', 'decisions.'],
      lead: 'For eight years I have worked at the intersection of data, technology and healthcare, designing analytical systems and software products that turn complex data into practical tools for decision-making.',
      cta: 'Get in touch',
      viewWork: 'The services',
    },
    about: {
      title: 'About',
      lead: 'Eight years spent making the data of people who care for patients readable.',
      paragraphs: [
        'I work in healthcare, where the task is always the same: take data nobody can interpret and return it in a shape you can decide on. The goal is not a better-looking report, but a more defensible decision.',
        'My work spans the entire data lifecycle, from building pipelines and analytical infrastructure to designing dashboards, applications and tools used in decision-making. When needed, I work directly on the code; when the challenge is organisational, my role is to translate needs, constraints and data into a product a team can actually maintain and use.',
        'I favour open-source technologies and architectures that are reproducible, verifiable and transferable. In healthcare, this is more than a technical choice: it means building systems that can be understood, maintained and audited after the project ends.',
      ],
      tools: 'I work mainly with R, Shiny, DuckDB, SQL, Docker and modern tools for data engineering and software development.',
      highlights: [
        { label: 'Years in the sector', value: 8, suffix: '+' },
        { label: 'Projects delivered', value: 20, suffix: '+' },
        { label: 'Organisations advised', value: 10, suffix: '+' },
      ],
    },
    services: {
      title: 'Services',
      lead: 'Three ways to work together, depending on where you currently stand.',
      items: [
        {
          title: 'Strategy & Analytics',
          description: 'I turn fragmented healthcare data into information systems that support decision-making. Together, we define which questions deserve an answer, what data is needed and how to build reliable, understandable and reproducible metrics.',
          features: ['Data strategy', 'KPIs & metrics', 'Business intelligence', 'Advanced analytics'],
        },
        {
          title: 'Data Products & Software',
          description: 'I design tools that take analysis out of the notebook and into everyday work: applications, dashboards, pipelines and analytical systems built to run in production and remain maintainable over time.',
          features: ['Data pipelines', 'Analytics applications', 'Dashboards', 'APIs & integrations'],
        },
        {
          title: 'Capability & Training',
          description: 'I support teams that want to bring analytical and development skills in-house, with training built around their own data, tools and real problems. The goal is not to complete a syllabus, but to help the team work independently.',
          features: ['R & data analysis', 'Data visualization', 'Reproducible workflows', 'Hands-on workshops'],
        },
      ],
    },
    process: {
      title: 'How I work',
      lead: 'Four stages. At any point you know where we are and what comes next.',
      steps: [
        {
          title: 'First conversation',
          body: 'Half an hour to frame the problem and confirm it is the one you think it is. If it turns out no outside help is needed, I say so plainly.',
        },
        {
          title: 'Diagnosis',
          body: 'A look at the actual data, not the documentation describing it. I establish what can be achieved with the information you already hold, what would require new collection, and which questions data cannot settle.',
        },
        {
          title: 'Proposal',
          body: 'Scope, timeline and terms set out in writing. Larger projects are broken into self-contained stages, so each produces something usable even if the work stops there.',
        },
        {
          title: 'Handover',
          body: 'Working code and documentation a third party can follow, with training for whoever will maintain it. The stated goal is independence: a year on, the same work should not require me.',
        },
      ],
    },
    contact: {
      headline: ['Let’s discuss', 'your project.'],
      description: 'Write even if the scope is not yet defined: the first conversation exists precisely to define it and to establish whether I can be useful.',
      cta: 'info@alessandroarrigo.com',
    },
  },
};

export type Translations = typeof translations.it;
