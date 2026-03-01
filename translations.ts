export type Language = 'it' | 'en';

export const translations = {
  it: {
    // Navbar
    nav: {
      home: 'Home',
      about: 'Chi Sono',
      services: 'Servizi',
      gallery: 'Gallery',
      techStack: 'Tech Stack',
      contact: 'Contatti',
    },
    // Hero
    hero: {
      available: 'Disponibile per nuovi progetti',
      greeting: 'Ciao, sono',
      description: 'Un <strong>Data Scientist</strong> & Product Manager dedicato a trasformare dati complessi in intelligenza azionabile. Specializzato in analytics sanitaria ed ecosistemi open-source.',
      cta: 'Lavoriamo Insieme',
      viewWork: 'Esplora i Miei Servizi',
    },
    // About
    about: {
      title: 'Chi Sono',
      subtitle: 'La mia storia',
      paragraphs: [
        'Sono un Data Scientist con una forte passione per la trasformazione dei dati in insight azionabili. Il mio percorso professionale mi ha portato a lavorare nel settore sanitario, dove ho sviluppato soluzioni analitiche per migliorare l\'efficienza operativa e la qualità delle cure.',
        'Credo fermamente nel potenziale di R e dell\'ecosistema open-source per democratizzare l\'accesso all\'analisi dei dati. La mia missione è rendere la data science accessibile e comprensibile a tutti.',
        'Oltre al lavoro tecnico, mi dedico alla formazione e alla consulenza, aiutando organizzazioni e professionisti a sfruttare al meglio il potere dei dati.',
      ],
      highlights: [
        { label: 'Anni di esperienza', value: '8+' },
        { label: 'Progetti completati', value: '20+' },
        { label: 'Clienti soddisfatti', value: '10+' },
      ],
    },
    // Services
    services: {
      title: 'Servizi',
      subtitle: 'Come posso aiutarti',
      items: [
        {
          title: 'Consulenza',
          description: 'Analisi strategica dei dati per supportare le decisioni aziendali. Ti aiuto a identificare le opportunità nascoste nei tuoi dati e a costruire una roadmap data-driven.',
          features: ['Analisi esplorativa', 'Business Intelligence', 'Data Strategy', 'KPI & Metriche'],
        },
        {
          title: 'Formazione',
          description: 'Corsi personalizzati su R, data visualization e analisi statistica. Dalla base all\'avanzato, per singoli o team aziendali.',
          features: ['Corsi R & RStudio', 'Data Visualization', 'Statistica applicata', 'Workshop pratici'],
        },
        {
          title: 'Sviluppo',
          description: 'Creazione di librerie R personalizzate e dashboard interattive con Shiny. Soluzioni su misura per le tue esigenze analitiche.',
          features: ['Librerie R custom', 'Dashboard Shiny', 'Report automatizzati', 'API & Integrazioni'],
        },
      ],
    },
    // Tech Stack
    techStack: {
      title: 'Tech Stack',
      subtitle: 'Strumenti e tecnologie',
      description: 'Ogni progetto ha esigenze diverse, ma questi sono gli strumenti su cui faccio affidamento quotidianamente. Un ecosistema consolidato che mi permette di coprire l\'intero ciclo di vita del dato — dall\'analisi esplorativa alla messa in produzione di soluzioni scalabili.',
    },
    // Contact
    contact: {
      title: 'Costruiamo qualcosa di',
      titleHighlight: 'straordinario',
      titleEnd: 'insieme.',
      description: 'Che tu abbia un progetto specifico in mente o voglia semplicemente parlare del futuro della data science, sono sempre aperto a nuove connessioni.',
      cta: 'Scrivimi un Messaggio',
      blog: 'Leggi il Mio Blog',
      response: 'Rispondo solitamente entro 24 ore',
    },
    // Footer
    footer: {
      copyright: 'Realizzato con React & Tailwind.',
      privacy: 'Privacy',
      blog: 'Blog',
    },
  },
  en: {
    // Navbar
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      gallery: 'Gallery',
      techStack: 'Tech Stack',
      contact: 'Contact',
    },
    // Hero
    hero: {
      available: 'Available for new projects',
      greeting: "Hi, I'm",
      description: 'A <strong>Data Scientist</strong> & Product Manager dedicated to transforming complex data into actionable intelligence. Specializing in healthcare analytics and open-source ecosystems.',
      cta: "Let's Work Together",
      viewWork: 'Explore My Services',
    },
    // About
    about: {
      title: 'About Me',
      subtitle: 'My story',
      paragraphs: [
        'I am a Data Scientist with a strong passion for transforming data into actionable insights. My professional journey has led me to work in the healthcare sector, where I have developed analytical solutions to improve operational efficiency and quality of care.',
        'I firmly believe in the potential of R and the open-source ecosystem to democratize access to data analysis. My mission is to make data science accessible and understandable to everyone.',
        'Beyond technical work, I dedicate myself to training and consulting, helping organizations and professionals make the most of the power of data.',
      ],
      highlights: [
        { label: 'Years of experience', value: '8+' },
        { label: 'Projects completed', value: '20+' },
        { label: 'Happy clients', value: '10+' },
      ],
    },
    // Services
    services: {
      title: 'Services',
      subtitle: 'How I can help you',
      items: [
        {
          title: 'Consulting',
          description: 'Strategic data analysis to support business decisions. I help you identify hidden opportunities in your data and build a data-driven roadmap.',
          features: ['Exploratory Analysis', 'Business Intelligence', 'Data Strategy', 'KPIs & Metrics'],
        },
        {
          title: 'Training',
          description: 'Customized courses on R, data visualization, and statistical analysis. From beginner to advanced, for individuals or corporate teams.',
          features: ['R & RStudio Courses', 'Data Visualization', 'Applied Statistics', 'Hands-on Workshops'],
        },
        {
          title: 'Development',
          description: 'Creation of custom R libraries and interactive dashboards with Shiny. Tailored solutions for your analytical needs.',
          features: ['Custom R Libraries', 'Shiny Dashboards', 'Automated Reports', 'APIs & Integrations'],
        },
      ],
    },
    // Tech Stack
    techStack: {
      title: 'Tech Stack',
      subtitle: 'Tools & technologies',
      description: 'Every project has different needs, but these are the tools I rely on daily. A proven ecosystem that allows me to cover the entire data lifecycle — from exploratory analysis to deploying scalable, production-ready solutions.',
    },
    // Contact
    contact: {
      title: "Let's build something",
      titleHighlight: 'extraordinary',
      titleEnd: 'together.',
      description: "Whether you have a specific project in mind or just want to chat about the future of data science, I'm always open to new connections.",
      cta: 'Drop Me a Message',
      blog: 'Read My Blog',
      response: 'Typically responds within 24 hours',
    },
    // Footer
    footer: {
      copyright: 'Built with React & Tailwind.',
      privacy: 'Privacy',
      blog: 'Blog',
    },
  },
};

export type Translations = typeof translations.it;
