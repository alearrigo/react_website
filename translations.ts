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
      lead: 'Data scientist e product manager. Otto anni di lavoro sui dati sanitari: analisi rigorose, strumenti progettati per la produzione, formazione su R per i professionisti che quei dati li utilizzano ogni giorno.',
      cta: 'Contattami',
      viewWork: 'I servizi',
    },
    about: {
      title: 'Chi sono',
      lead: 'Otto anni dedicati a rendere leggibili i dati di chi cura le persone.',
      paragraphs: [
        'Lavoro nel settore sanitario, dove il compito è sempre lo stesso: prendere dati che nessuno riesce a interpretare e restituirli in una forma su cui si può decidere. L’obiettivo non è un report più curato, ma una decisione più difendibile.',
        'Uso R e l’ecosistema open source per una ragione pratica prima che ideologica: gli strumenti aperti producono risultati che chiunque può riprodurre passo per passo. In ambito sanitario la riproducibilità non è un requisito formale, è ciò che distingue un’analisi da un’opinione.',
        'Al lavoro analitico affianco un’attività continuativa di formazione, tra corsi, workshop e affiancamento. Un’analisi che solo io so riprodurre ha vita breve: si esaurisce nel momento in cui il progetto si chiude.',
      ],
      tools: 'Strumenti di lavoro quotidiani: R, tidyverse, Shiny, Rhino, Quarto, DuckDB, SQL, Docker, Git, Linux. Tutti aperti, verificabili e installabili all’interno di un’infrastruttura ospedaliera.',
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
          title: 'Consulenza',
          description: 'Analisi strategica per organizzazioni che dispongono dei dati ma non della struttura per interrogarli. Definiamo quali domande meritano una risposta, quali no, e quale percorso porta a ottenerla con le risorse effettivamente disponibili.',
          features: ['Analisi esplorativa', 'Business intelligence', 'Data strategy', 'KPI e metriche'],
        },
        {
          title: 'Formazione',
          description: 'Corsi su R, visualizzazione e statistica applicata, calibrati sul livello reale del gruppo e non su un programma standard. Pensati per team che oggi affidano al foglio di calcolo analisi che richiederebbero strumenti diversi.',
          features: ['Corsi R e RStudio', 'Data visualization', 'Statistica applicata', 'Workshop pratici'],
        },
        {
          title: 'Sviluppo',
          description: 'Dall’analisi funzionante al software mantenibile: librerie R documentate e dashboard Shiny progettate per la produzione, con il passaggio di consegne necessario perché restino operative nel tempo.',
          features: ['Librerie R custom', 'Dashboard Shiny', 'Report automatizzati', 'API e integrazioni'],
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
      response: 'Risposta entro 24 ore',
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
      lead: 'Data scientist and product manager. Eight years working with healthcare data: rigorous analysis, tools built for production, and R training for the professionals who use those numbers every day.',
      cta: 'Get in touch',
      viewWork: 'The services',
    },
    about: {
      title: 'About',
      lead: 'Eight years spent making the data of people who care for patients readable.',
      paragraphs: [
        'I work in healthcare, where the task is always the same: take data nobody can interpret and return it in a shape you can decide on. The goal is not a better-looking report, but a more defensible decision.',
        'I use R and the open-source ecosystem for a practical reason before an ideological one: open tools produce results anyone can reproduce step by step. In healthcare, reproducibility is not a formality, it is what separates an analysis from an opinion.',
        'Alongside the analytical work I teach continuously, through courses, workshops and hands-on support. An analysis only I can reproduce is short-lived: it ends the moment the project does.',
      ],
      tools: 'Daily tools: R, tidyverse, Shiny, Rhino, Quarto, DuckDB, SQL, Docker, Git, Linux. All open, verifiable, and installable inside hospital infrastructure.',
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
          title: 'Consulting',
          description: 'Strategic analysis for organisations that hold the data but not the structure to interrogate it. We establish which questions deserve an answer, which do not, and what route reaches one with the resources actually available.',
          features: ['Exploratory analysis', 'Business intelligence', 'Data strategy', 'KPIs and metrics'],
        },
        {
          title: 'Training',
          description: 'Courses on R, visualisation and applied statistics, calibrated to the group’s real level rather than to a standard syllabus. Built for teams currently handling in spreadsheets the analysis that calls for different tools.',
          features: ['R and RStudio courses', 'Data visualization', 'Applied statistics', 'Hands-on workshops'],
        },
        {
          title: 'Development',
          description: 'From working analysis to maintainable software: documented R packages and Shiny dashboards built for production, with the handover required to keep them running over time.',
          features: ['Custom R libraries', 'Shiny dashboards', 'Automated reports', 'APIs and integrations'],
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
      response: 'Reply within 24 hours',
    },
  },
};

export type Translations = typeof translations.it;
