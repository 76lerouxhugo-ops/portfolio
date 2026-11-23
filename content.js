/* ==========================================================
   CONTENT.JS : tous les textes du site au même endroit.
   Pour modifier un texte, change-le ici, pas dans le HTML.
   ========================================================== */
window.CONTENT_I18N = window.CONTENT_I18N || {};
window.CONTENT_I18N.fr = {
  meta: {
    name: "Hugo Leroux",
    role: "Alternant PMO / Assistant Projet",
    team: "Appui & Valorisation des Projets, EM Normandie",
    email: "76.leroux.hugo@gmail.com",
    linkedin: "https://www.linkedin.com/in/hugo-leroux-52751317a/"
  },

  ui: {
    skip: "Aller au contenu",
    langSwitch: "EN",
    langLabel: "Switch to English",
    themeToDark: "Activer le mode sombre",
    themeToLight: "Activer le mode clair",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
    close: "Fermer",
    modal: { context: "Contexte", role: "Mon rôle", actions: "Actions", deliverables: "Livrables", value: "Valeur" },
    stepOf: "Étape {n} / {total}",
    prev: "Étape précédente",
    next: "Étape suivante",
    themeIs: "Thème : "
  },

  nav: [
    { label: "Rôle", href: "#role" },
    { label: "Projets", href: "#projets" },
    { label: "Méthode", href: "#methode" },
    { label: "Vibe coding", href: "#vibe-coding" },
    { label: "Parcours", href: "#parcours" },
    { label: "Contact", href: "#contact" }
  ],

  /* ---------- 1. Hero ---------- */
  hero: {
    eyebrow: "EM Normandie · Le Havre · Alternance 2025 → 2027",
    intro: "Hugo Leroux,",
    roles: ["Chef de projet AMOA", "PMO", "Facilitateur métiers", "Vibe coder"],
    tagline: "Je transforme les besoins métiers en solutions concrètes. De l'idée à l'outil, plus vite.",
    ctaPrimary: { label: "Voir mes projets", href: "#projets" },
    ctaSecondary: { label: "Me contacter", href: "#contact" },
    scrollHint: "Défiler"
  },

  /* ---------- 2. Chiffres clés ---------- */
  stats: [
    { value: 10, prefix: "", suffix: "+", label: "projets suivis" },
    { value: 30, prefix: "~", suffix: "", label: "ateliers métiers préparés ou animés" },
    { value: 13, prefix: "", suffix: "+", label: "services accompagnés" },
    { value: 3, prefix: "", suffix: "", label: "learning expeditions internationales" }
  ],

  /* ---------- 3. Mon rôle ---------- */
  role: {
    kicker: "Mon rôle",
    title: "Le pont entre les métiers, la DSI et les utilisateurs.",
    text: [
      "Alternant PMO / Assistant Projet dans l'équipe Appui & Valorisation des Projets, j'accompagne les services de l'EM Normandie pour simplifier et améliorer leurs outils et leurs processus.",
      "Je recueille les besoins, je les traduis en solutions claires, je travaille avec les prestataires qui développent et je m'assure que les utilisateurs, étudiants comme collaborateurs, adoptent le résultat."
    ],
    vision: {
      title: "Ma vision de l'AMOA",
      text: "Un bon projet ne se mesure pas à l'outil livré, mais à l'usage qu'on en fait. Je pars toujours du terrain, je parle le langage de chaque interlocuteur et je prototype vite pour décider sur du concret."
    },
    profile: [
      { label: "Formation", value: "Master Stratégie digitale et Creative design (ESCEN) + MBA Web Business" },
      { label: "Profil", value: "Gestion de projet, sensibilité business, creative design, ouverture internationale" },
      { label: "Ambition", value: "Chef de projet AMOA à l'EM Normandie" }
    ]
  },

  /* ---------- 4. Projets ---------- */
  projectsSection: {
    kicker: "Projets",
    title: "Des besoins métiers devenus des solutions.",
    filters: ["Tous", "AMOA", "PMO", "UX", "Innovation"],
    more: "Voir le détail"
  },
  projects: [
    {
      id: "calendrier",
      title: "Calendrier Global",
      summary: "Remplacer Notion par une solution institutionnelle compatible Microsoft, SharePoint et Aurion.",
      tags: ["AMOA", "UX"],
      size: "large",
      context: "Le calendrier global reposait sur Notion, un outil non institutionnel. L'objectif : une solution intégrée à l'écosystème Microsoft / SharePoint / Aurion.",
      role: "Appui AMOA : recueil des besoins, analyse de l'existant et construction des scénarios.",
      actions: [
        "Ateliers d'expression de besoins avec les métiers",
        "Questionnaire auprès des étudiants",
        "Cartographie des processus et analyse des limites de l'existant",
        "Échanges avec la DSI et un campus international"
      ],
      deliverables: ["Cartographie des processus", "Scénarios court terme / long terme"],
      value: "Expérience utilisateur, gouvernance de la donnée, aide à la décision.",
      status: ""
    },
    {
      id: "guichet",
      title: "Guichet Unique étudiant (Click & Help)",
      summary: "Simplifier les demandes financières des étudiants avec un formulaire intelligent.",
      tags: ["AMOA", "UX"],
      size: "tall",
      context: "Les demandes des étudiants liées aux questions financières étaient difficiles à orienter vers le bon interlocuteur.",
      role: "Pilotage AMOA du recueil des besoins jusqu'à la mise en production.",
      actions: [
        "Ateliers avec le service Finance et recueil des thématiques",
        "Formulaire avec sous-catégories et logique conditionnelle",
        "Routage automatique vers le bon interlocuteur",
        "Intitulés reformulés « côté étudiant » et validation des parcours"
      ],
      deliverables: ["Formulaire en production", "Communication de mise en production"],
      value: "Des demandes mieux orientées et un parcours plus simple pour l'étudiant.",
      status: "Terminé et livré aux étudiants"
    },
    {
      id: "examens",
      title: "Digitalisation du processus post-examens",
      summary: "Moderniser la chaîne copies papier → note dans l'outil.",
      tags: ["AMOA", "Innovation"],
      size: "wide",
      context: "Le traitement des copies papier après les examens mobilisait beaucoup de temps et d'étapes manuelles.",
      role: "Analyse, benchmark et construction des scénarios jusqu'à la restitution COMEX.",
      actions: [
        "Benchmark et échanges avec des fournisseurs",
        "Réflexion sur l'anonymisation, le décachetage et l'OCR",
        "Étude de la remontée automatique des notes",
        "Calcul du coût complet du processus actuel"
      ],
      deliverables: ["Scénarios d'amélioration", "Restitution au COMEX"],
      value: "Une décision éclairée, appuyée sur le coût complet et des scénarios comparés.",
      status: "Lancement d'un POC validé"
    },
    {
      id: "sharepoint-projets",
      title: "Refonte du SharePoint Projets",
      summary: "Un espace projets clair, outillé et relié à la roadmap.",
      tags: ["PMO", "UX"],
      size: "",
      context: "L'espace SharePoint de l'équipe projets devait devenir la porte d'entrée unique pour suivre et comprendre les projets.",
      role: "Conception de l'arborescence, de la direction artistique et coordination avec un prestataire.",
      actions: [
        "Nouvelle arborescence : Accueil, Rôles & Méthodologie, Contact, Projets",
        "Nouvelle direction artistique",
        "Intégration de la roadmap Project Monitor avec un prestataire externe",
        "Planning par phases : cadrage, conception, développement, recette, MEP, jalons"
      ],
      deliverables: ["SharePoint refondu", "Procédure d'achat (devis, bon de commande, facture)"],
      value: "Une information projet centralisée et lisible pour tous.",
      status: "En amélioration continue"
    },
    {
      id: "aurion",
      title: "SharePoint ERP Aurion",
      summary: "Contribution au design de la nouvelle structure documentaire.",
      tags: ["UX"],
      size: "",
      context: "Les modes opératoires de l'ERP Aurion devaient être plus faciles à trouver et à parcourir.",
      role: "Contribution au design initial, en appui de la personne en charge du change management.",
      actions: [
        "Organisation des modes opératoires par catégories",
        "Navigation plus intuitive",
        "Création de bannières visuelles"
      ],
      deliverables: ["Structure initiale du SharePoint"],
      value: "Une base de navigation claire, reprise ensuite par le change management.",
      status: "Projet repris par le change management"
    },
    {
      id: "kit",
      title: "Kit Projet & méthodologie PMO",
      summary: "Des modèles prêts à l'emploi pour cadrer, animer et restituer.",
      tags: ["PMO"],
      size: "wide",
      context: "Les projets avaient besoin de supports communs pour gagner du temps et parler le même langage.",
      role: "Conception de l'ensemble des modèles.",
      actions: [
        "Formalisation des étapes clés d'un projet",
        "Création de modèles réutilisables pour chaque étape"
      ],
      deliverables: [
        "Templates de revue d'intention",
        "Formulaires de recueil de besoins",
        "Comptes rendus détaillés et synthétiques",
        "Supports de kick-off et slides de restitution COMEX",
        "Classeurs statistiques et conducteurs d'ateliers"
      ],
      value: "Des projets plus homogènes et plus rapides à lancer.",
      status: "Utilisé sur les projets de l'équipe"
    },
    {
      id: "ateliers",
      title: "Ateliers métiers",
      summary: "Faire émerger les vrais besoins, service par service.",
      tags: ["AMOA"],
      size: "wide",
      context: "Chaque service a ses contraintes et son vocabulaire : l'atelier est le moment où le besoin devient clair.",
      role: "Préparation et animation des ateliers.",
      actions: [
        "Finance, Planification, Employabilité, Scolarité",
        "International, Vie étudiante, Événementiel, Faculté",
        "Ordres du jour et questions structurées",
        "Mails adaptés à chaque interlocuteur"
      ],
      deliverables: ["Ordres du jour", "Comptes rendus"],
      value: "Des besoins exprimés clairement et partagés par tous.",
      status: ""
    },
    {
      id: "innovation",
      title: "Projets transverses & innovation",
      summary: "Escape game IA Act, communication interne et livre blanc UX.",
      tags: ["Innovation"],
      size: "wide",
      context: "Au-delà des projets outils, accompagner le changement et sensibiliser aux enjeux du digital et de l'IA.",
      role: "Conception, création des supports et rédaction.",
      actions: [
        "Escape game pédagogique sur l'IA Act : univers d'enquête vintage, équipes Vigilia, Humania et Garantia",
        "Notes de service, messages Teams, accompagnement des réorganisations Teams / SharePoint",
        "Livre blanc : « L'expérience utilisateur, facteur clé de réussite de la transformation digitale »"
      ],
      deliverables: ["Cartes, alertes, diplômes et puzzles", "Livre blanc", "Supports de communication"],
      value: "Faire comprendre et adopter le changement.",
      status: ""
    }
  ],

  /* ---------- 5. Méthodologie ---------- */
  method: {
    kicker: "Méthode",
    title: "Six étapes, un fil conducteur : l'utilisateur.",
    steps: [
      { title: "Cadrer", text: "Clarifier l'objectif, le périmètre, les acteurs et les contraintes." },
      { title: "Recueillir", text: "Ateliers et questionnaires pour faire émerger les vrais besoins." },
      { title: "Concevoir", text: "Cartographier, prototyper et comparer des scénarios." },
      { title: "Recetter", text: "Tester avec les utilisateurs et valider les parcours." },
      { title: "Déployer", text: "Mettre en production et communiquer au bon public." },
      { title: "Accompagner", text: "Former, écouter les retours et améliorer en continu." }
    ]
  },

  /* ---------- 6. Compétences ---------- */
  skills: {
    kicker: "Compétences",
    title: "Une double casquette : méthode et création.",
    groups: [
      { title: "AMOA", items: ["Recueil et formalisation des besoins", "Cartographie des processus", "Rédaction de cadrages", "Recette", "Conduite du changement"] },
      { title: "PMO", items: ["Planification et jalons", "Gouvernance", "Suivi des risques", "Reporting COMEX", "Procédures d'achat"] },
      { title: "Digital & design", items: ["Stratégie digitale", "Creative design", "UX centrée utilisateur", "Prototypage", "Super apps"] },
      { title: "Soft skills", items: ["Animation d'ateliers", "Posture de facilitateur", "Communication adaptée à chaque public"] }
    ],
    toolsTitle: "Outils",
    tools: ["SharePoint", "Power Apps", "Microsoft Forms", "Project Monitor", "Camunda", "Aurion", "MyEM", "Teams", "Outlook", "Excel", "PowerPoint", "Copilot", "Claude", "GitHub", "Cloudflare"]
  },

  /* ---------- 7. Vibe coding & IA ---------- */
  vibe: {
    kicker: "Vibe coding & IA",
    title: "Ce site a été vibe codé.",
    lead: "Je combine posture AMOA et capacité de prototypage rapide : je fais gagner du temps entre l'idée et la solution.",
    steps: [
      { title: "Prompt", text: "J'ai rédigé un cahier des charges complet, comme pour un prestataire : objectifs, contraintes, contenus, méthode." },
      { title: "Itérations", text: "Section par section, j'ai testé, corrigé et validé chaque étape avec l'IA." },
      { title: "Déploiement", text: "Code versionné sur GitHub et mis en ligne sur Cloudflare Pages." }
    ],
    promptLabel: "Extrait de mon prompt",
    prompt: "# RÔLE\nTu es un expert en développement web front-end,\nen design d'interfaces et en UX design.\n\n# OBJECTIF\nCréer un site portfolio qui prouve ma capacité\nà concevoir des outils digitaux grâce au vibe coding.\n\n# MÉTHODE\n1. Propose l'arborescence, la palette, les typographies.\n2. Génère le code section par section.\n3. Attends ma validation entre chaque étape.",
    toolsTitle: "Mes outils construits",
    tools: [
      { title: "Prototypes de super app", text: "Inspirés de la learning expedition à Singapour." },
      { title: "Applications ciblées", text: "Prototypes répondant à des besoins précis." },
      { title: "Sites web vibe codés", text: "Pour des projets en cours." },
      { title: "Présentations & visuels", text: "Supports conçus avec l'IA." },
      { title: "Escape game IA Act", text: "Supports générés et designés avec l'IA." }
    ],
    sim: {
      title: "Simulateur : du besoin métier à la solution",
      intro: "Choisis un service et un irritant. La fiche projet et la démarche AMOA se construisent en direct.",
      serviceLabel: "Choisis un service",
      painLabel: "Choisis un irritant",
      cardTitle: "Fiche projet",
      fields: { service: "Service", pain: "Irritant", solution: "Solution proposée", tools: "Outils", benefit: "Bénéfice attendu" },
      deliverableLabel: "Livrable",
      actorsLabel: "Avec qui",
      play: "Lecture auto",
      pause: "Pause",
      services: ["Finance", "Scolarité", "International", "Planification", "Employabilité", "Vie étudiante", "Événementiel"],
      pains: [
        { label: "Demandes dispersées par mail", solution: "un formulaire unique avec routage automatique vers le bon interlocuteur", tools: ["Microsoft Forms", "Power Automate", "Teams"], benefit: "Des demandes mieux orientées et un suivi clair." },
        { label: "Outil non institutionnel", solution: "une solution intégrée à l'écosystème Microsoft 365", tools: ["SharePoint", "Power Apps", "Aurion"], benefit: "Des données centralisées et sécurisées." },
        { label: "Processus papier trop long", solution: "un processus digitalisé, d'abord testé en POC", tools: ["Benchmark fournisseurs", "Camunda", "Excel"], benefit: "Moins d'étapes manuelles et une décision appuyée sur le coût complet." },
        { label: "Information difficile à trouver", solution: "un espace SharePoint repensé avec une navigation claire", tools: ["SharePoint", "Teams", "Copilot"], benefit: "Une information trouvée en quelques clics." }
      ],
      steps: [
        { title: "Cadrage", text: "Définir avec le service {service} l'objectif, le périmètre et les indicateurs de réussite.", deliverable: "Note de cadrage", actors: "Responsable {service}, équipe projet" },
        { title: "Ateliers", text: "Comprendre l'irritant « {pain} » avec les personnes qui le vivent au quotidien.", deliverable: "Compte rendu + cartographie du processus", actors: "Équipe {service}, utilisateurs" },
        { title: "Solution", text: "Concevoir et prototyper {solution}.", deliverable: "Prototype testable", actors: "DSI, prestataire si besoin" },
        { title: "Recette", text: "Tester les parcours avec de vrais utilisateurs et ajuster.", deliverable: "Cahier de recette validé", actors: "Utilisateurs clés {service}" },
        { title: "Déploiement", text: "Mettre en production, communiquer et accompagner le service {service}.", deliverable: "Mise en production + communication", actors: "{service}, communication interne" }
      ]
    }
  },

  /* ---------- 8. International ---------- */
  international: {
    kicker: "International",
    title: "Voir ailleurs pour mieux construire ici.",
    items: [
      { place: "Boston", detail: "2 learning expeditions", theme: "Entrepreneuriat & intelligence artificielle", value: "Une culture de l'expérimentation rapide et des usages concrets de l'IA, utiles pour accélérer les projets de l'école." },
      { place: "Singapour", detail: "1 learning expedition", theme: "Super apps & écosystèmes digitaux", value: "Une vision « tout-en-un » des services : une source d'inspiration pour simplifier le parcours des étudiants." }
    ]
  },

  /* ---------- 9. Timeline (dates à ajuster si besoin) ---------- */
  timeline: {
    kicker: "Parcours",
    title: "Mon alternance, étape par étape.",
    items: [
      { date: "Nov. 2025", title: "Arrivée dans l'équipe", text: "Intégration à l'équipe Appui & Valorisation des Projets." },
      { date: "2025 → 2026", title: "Immersion et structuration", text: "Découverte des services, premiers ateliers métiers et création du kit projet." },
      { date: "2026", title: "Projets livrés et cadrés", text: "Guichet Unique étudiant livré, études du Calendrier Global et du processus post-examens." },
      { date: "Nov. 2026", title: "Learning expedition à Boston", text: "Entrepreneuriat et intelligence artificielle." },
      { date: "Date à compléter", title: "Learning expedition à Singapour", text: "Super apps et écosystèmes digitaux." },
      { date: "2026 → 2027", title: "Montée en puissance AMOA", text: "Pilotage de projets plus larges et prototypage rapide grâce à l'IA." },
      { date: "Août 2027", title: "Fin de l'alternance", text: "Objectif : poursuivre en CDI comme Chef de projet AMOA." }
    ]
  },

  /* ---------- 10. Retours reçus ---------- */
  feedback: {
    kicker: "Retours reçus",
    title: "Des collaborations qui se passent bien, à tous les niveaux.",
    domains: ["Métiers", "Équipe projet", "Direction"],
    keywords: ["Fiabilité", "Écoute", "Réactivité", "Créativité", "Sens du service"]
  },

  /* ---------- 11. Valeur demain ---------- */
  value: {
    kicker: "Demain",
    title: "Ce que j'apporterai à l'EM Normandie en CDI.",
    items: [
      { title: "Continuité", text: "Les projets en cours avancent sans perte d'information ni temps de reprise." },
      { title: "Connaissance du terrain", text: "Je connais déjà les services, leurs outils et leurs interlocuteurs." },
      { title: "Montée en puissance AMOA", text: "Je peux piloter des projets plus larges, de bout en bout." },
      { title: "Prototypage rapide", text: "Avec l'IA, je passe plus vite de l'idée à une maquette testable." }
    ]
  },

  /* ---------- 12. Contact ---------- */
  contact: {
    kicker: "Contact",
    title: "Parlons de la suite.",
    text: "Une question, un projet, un besoin à cadrer ? Je réponds rapidement.",
    emailLabel: "M'écrire",
    linkedinLabel: "LinkedIn"
  },

  footer: {
    text: "Site conçu et vibe codé par Hugo Leroux.",
    terminalHint: "Ouvrir le terminal"
  },

  /* ---------- Easter egg : terminal ---------- */
  terminal: {
    title: "hugo@em-normandie:~",
    welcome: "Bienvenue. Tape « help » pour voir les commandes.",
    help: [
      "help      liste des commandes",
      "projets   liste de mes projets",
      "contact   mes coordonnées",
      "theme     bascule clair / sombre",
      "clear     vide le terminal",
      "exit      ferme le terminal"
    ],
    unknown: "Commande inconnue. Tape « help »."
  }
};

/* ==========================================================
   ENGLISH VERSION
   ========================================================== */
window.CONTENT_I18N.en = {
  meta: {
    name: "Hugo Leroux",
    role: "Work-study PMO / Project Assistant",
    team: "Project Support & Promotion, EM Normandie",
    email: "76.leroux.hugo@gmail.com",
    linkedin: "https://www.linkedin.com/in/hugo-leroux-52751317a/"
  },

  ui: {
    skip: "Skip to content",
    langSwitch: "FR",
    langLabel: "Passer en français",
    themeToDark: "Switch to dark mode",
    themeToLight: "Switch to light mode",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    close: "Close",
    modal: { context: "Context", role: "My role", actions: "Actions", deliverables: "Deliverables", value: "Value" },
    stepOf: "Step {n} / {total}",
    prev: "Previous step",
    next: "Next step",
    themeIs: "Theme: "
  },

  nav: [
    { label: "Role", href: "#role" },
    { label: "Projects", href: "#projets" },
    { label: "Method", href: "#methode" },
    { label: "Vibe coding", href: "#vibe-coding" },
    { label: "Journey", href: "#parcours" },
    { label: "Contact", href: "#contact" }
  ],

  hero: {
    eyebrow: "EM Normandie · Le Havre · Work-study 2025 → 2027",
    intro: "Hugo Leroux,",
    roles: ["Business Project Manager", "PMO", "Business facilitator", "Vibe coder"],
    tagline: "I turn business needs into concrete solutions. From idea to tool, faster.",
    ctaPrimary: { label: "See my projects", href: "#projets" },
    ctaSecondary: { label: "Contact me", href: "#contact" },
    scrollHint: "Scroll"
  },

  stats: [
    { value: 10, prefix: "", suffix: "+", label: "projects followed" },
    { value: 30, prefix: "~", suffix: "", label: "business workshops prepared or led" },
    { value: 13, prefix: "", suffix: "+", label: "departments supported" },
    { value: 3, prefix: "", suffix: "", label: "international learning expeditions" }
  ],

  role: {
    kicker: "My role",
    title: "The bridge between business teams, IT and users.",
    text: [
      "As a work-study PMO / Project Assistant in the Project Support & Promotion team, I help EM Normandie departments simplify and improve their tools and processes.",
      "I gather needs, turn them into clear solutions, work with the providers who build them and make sure users, students and staff alike, adopt the result."
    ],
    vision: {
      title: "My view of the business analyst role",
      text: "A good project is not measured by the tool delivered, but by how people use it. I always start from the field, speak each person's language and prototype fast to decide on something real."
    },
    profile: [
      { label: "Education", value: "Master's in Digital Strategy & Creative Design (ESCEN) + MBA Web Business" },
      { label: "Profile", value: "Project management, business sense, creative design, international mindset" },
      { label: "Goal", value: "Business Project Manager (AMOA) at EM Normandie" }
    ]
  },

  projectsSection: {
    kicker: "Projects",
    title: "Business needs turned into solutions.",
    filters: ["All", "AMOA", "PMO", "UX", "Innovation"],
    more: "See details"
  },
  projects: [
    {
      id: "calendrier", title: "Global Calendar",
      summary: "Replacing Notion with an institutional solution compatible with Microsoft, SharePoint and Aurion.",
      tags: ["AMOA", "UX"], size: "large",
      context: "The global calendar ran on Notion, a non-institutional tool. The goal: a solution built into the Microsoft / SharePoint / Aurion ecosystem.",
      role: "Business analysis support: needs gathering, analysis of the current setup and scenario building.",
      actions: ["Needs workshops with business teams", "Student survey", "Process mapping and analysis of current limits", "Discussions with IT and an international campus"],
      deliverables: ["Process map", "Short-term / long-term scenarios"],
      value: "User experience, data governance, decision support.",
      status: ""
    },
    {
      id: "guichet", title: "Student One-Stop Desk (Click & Help)",
      summary: "Simplifying students' financial requests with a smart form.",
      tags: ["AMOA", "UX"], size: "tall",
      context: "Students' financial requests were hard to route to the right person.",
      role: "Business analysis lead, from needs gathering to go-live.",
      actions: ["Workshops with the Finance department and topic gathering", "Form with sub-categories and conditional logic", "Automatic routing to the right contact", "Labels rewritten from the student's point of view and journeys validated"],
      deliverables: ["Form in production", "Go-live communication"],
      value: "Better-routed requests and a simpler journey for students.",
      status: "Completed and delivered to students"
    },
    {
      id: "examens", title: "Digitising the post-exam process",
      summary: "Modernising the chain from paper exam scripts to grades in the system.",
      tags: ["AMOA", "Innovation"], size: "wide",
      context: "Handling paper exam scripts after exams took a lot of time and manual steps.",
      role: "Analysis, benchmark and scenario building up to the executive committee presentation.",
      actions: ["Benchmark and discussions with suppliers", "Work on anonymisation, unsealing and OCR", "Study of automatic grade upload", "Full cost calculation of the current process"],
      deliverables: ["Improvement scenarios", "Presentation to the executive committee"],
      value: "An informed decision, based on full cost and compared scenarios.",
      status: "Proof of concept approved"
    },
    {
      id: "sharepoint-projets", title: "Projects SharePoint redesign",
      summary: "A clear projects space, well equipped and linked to the roadmap.",
      tags: ["PMO", "UX"], size: "",
      context: "The projects team's SharePoint had to become the single entry point to follow and understand projects.",
      role: "Site structure and visual design, coordination with an external provider.",
      actions: ["New structure: Home, Roles & Method, Contact, Projects", "New visual identity", "Project Monitor roadmap integration with an external provider", "Phased planning: scoping, design, development, testing, go-live, milestones"],
      deliverables: ["Redesigned SharePoint", "Purchasing procedure (quote, purchase order, invoice)"],
      value: "Centralised project information, easy for everyone to read.",
      status: "Continuous improvement"
    },
    {
      id: "aurion", title: "Aurion ERP SharePoint",
      summary: "Contribution to the design of the new documentation structure.",
      tags: ["UX"], size: "",
      context: "Aurion ERP how-to guides needed to be easier to find and browse.",
      role: "Contribution to the initial design, supporting the change management lead.",
      actions: ["How-to guides organised by category", "More intuitive navigation", "Visual banners"],
      deliverables: ["Initial SharePoint structure"],
      value: "A clear navigation base, then taken over by change management.",
      status: "Taken over by change management"
    },
    {
      id: "kit", title: "Project kit & PMO method",
      summary: "Ready-to-use templates to scope, run and report.",
      tags: ["PMO"], size: "wide",
      context: "Projects needed shared materials to save time and speak the same language.",
      role: "Design of all the templates.",
      actions: ["Key project stages formalised", "Reusable templates for each stage"],
      deliverables: ["Intent review templates", "Needs gathering forms", "Detailed and summary meeting notes", "Kick-off decks and executive committee slides", "Statistics workbooks and workshop guides"],
      value: "More consistent projects that are faster to launch.",
      status: "Used on the team's projects"
    },
    {
      id: "ateliers", title: "Business workshops",
      summary: "Bringing out real needs, department by department.",
      tags: ["AMOA"], size: "wide",
      context: "Each department has its own constraints and vocabulary: the workshop is where the need becomes clear.",
      role: "Preparing and leading workshops.",
      actions: ["Finance, Planning, Employability, Academic affairs", "International, Student life, Events, Faculty", "Agendas and structured questions", "Emails tailored to each contact"],
      deliverables: ["Agendas", "Meeting notes"],
      value: "Needs expressed clearly and shared by everyone.",
      status: ""
    },
    {
      id: "innovation", title: "Cross-functional & innovation projects",
      summary: "EU AI Act escape game, internal communication and a UX white paper.",
      tags: ["Innovation"], size: "wide",
      context: "Beyond tool projects: supporting change and raising awareness of digital and AI issues.",
      role: "Concept, content creation and writing.",
      actions: ["Educational escape game on the EU AI Act: vintage investigation world, teams Vigilia, Humania and Garantia", "Internal memos, Teams messages, support for Teams / SharePoint reorganisations", "White paper: \"User experience, a key success factor in digital transformation\""],
      deliverables: ["Cards, alerts, diplomas and puzzles", "White paper", "Communication materials"],
      value: "Helping people understand and adopt change.",
      status: ""
    }
  ],

  method: {
    kicker: "Method",
    title: "Six steps, one common thread: the user.",
    steps: [
      { title: "Scope", text: "Clarify the goal, scope, stakeholders and constraints." },
      { title: "Gather", text: "Workshops and surveys to bring out real needs." },
      { title: "Design", text: "Map, prototype and compare scenarios." },
      { title: "Test", text: "Test with users and validate the journeys." },
      { title: "Deploy", text: "Go live and communicate to the right audience." },
      { title: "Support", text: "Train, listen to feedback and keep improving." }
    ]
  },

  skills: {
    kicker: "Skills",
    title: "Two hats: method and creativity.",
    groups: [
      { title: "Business analysis", items: ["Needs gathering and formalisation", "Process mapping", "Scoping documents", "User acceptance testing", "Change management"] },
      { title: "PMO", items: ["Planning and milestones", "Governance", "Risk tracking", "Executive reporting", "Purchasing procedures"] },
      { title: "Digital & design", items: ["Digital strategy", "Creative design", "User-centred UX", "Prototyping", "Super apps"] },
      { title: "Soft skills", items: ["Workshop facilitation", "Facilitator mindset", "Communication adapted to each audience"] }
    ],
    toolsTitle: "Tools",
    tools: ["SharePoint", "Power Apps", "Microsoft Forms", "Project Monitor", "Camunda", "Aurion", "MyEM", "Teams", "Outlook", "Excel", "PowerPoint", "Copilot", "Claude", "GitHub", "Cloudflare"]
  },

  vibe: {
    kicker: "Vibe coding & AI",
    title: "This site was vibe coded.",
    lead: "I combine a business analyst mindset with fast prototyping: I save time between the idea and the solution.",
    steps: [
      { title: "Prompt", text: "I wrote a full specification, as I would for a provider: goals, constraints, content, method." },
      { title: "Iterations", text: "Section by section, I tested, fixed and approved each step with AI." },
      { title: "Deployment", text: "Code versioned on GitHub and published on Cloudflare Pages." }
    ],
    promptLabel: "Extract from my prompt",
    prompt: "# ROLE\nYou are an expert in front-end web development,\ninterface design and UX design.\n\n# GOAL\nBuild a portfolio site that proves I can\ndesign digital tools with vibe coding.\n\n# METHOD\n1. Suggest the site map, colour palette and fonts.\n2. Generate the code section by section.\n3. Wait for my approval between each step.",
    toolsTitle: "Tools I've built",
    tools: [
      { title: "Super app prototypes", text: "Inspired by the Singapore learning expedition." },
      { title: "Targeted apps", text: "Prototypes that answer specific needs." },
      { title: "Vibe-coded websites", text: "For ongoing projects." },
      { title: "Presentations & visuals", text: "Materials designed with AI." },
      { title: "EU AI Act escape game", text: "Materials generated and designed with AI." }
    ],
    sim: {
      title: "Simulator: from business need to solution",
      intro: "Pick a department and a pain point. The project sheet and the approach build themselves live.",
      serviceLabel: "Pick a department",
      painLabel: "Pick a pain point",
      cardTitle: "Project sheet",
      fields: { service: "Department", pain: "Pain point", solution: "Proposed solution", tools: "Tools", benefit: "Expected benefit" },
      deliverableLabel: "Deliverable",
      actorsLabel: "With",
      play: "Autoplay",
      pause: "Pause",
      services: ["Finance", "Academic affairs", "International", "Planning", "Employability", "Student life", "Events"],
      pains: [
        { label: "Requests scattered across emails", solution: "a single form with automatic routing to the right contact", tools: ["Microsoft Forms", "Power Automate", "Teams"], benefit: "Better-routed requests and clear follow-up." },
        { label: "Non-institutional tool", solution: "a solution built into the Microsoft 365 ecosystem", tools: ["SharePoint", "Power Apps", "Aurion"], benefit: "Centralised, secure data." },
        { label: "Paper process too slow", solution: "a digitised process, first tested as a proof of concept", tools: ["Supplier benchmark", "Camunda", "Excel"], benefit: "Fewer manual steps and a decision based on full cost." },
        { label: "Information hard to find", solution: "a redesigned SharePoint space with clear navigation", tools: ["SharePoint", "Teams", "Copilot"], benefit: "Information found in a few clicks." }
      ],
      steps: [
        { title: "Scoping", text: "Define with the {service} team the goal, scope and success indicators.", deliverable: "Scoping note", actors: "{service} manager, project team" },
        { title: "Workshops", text: "Understand the pain point \"{pain}\" with the people who live it every day.", deliverable: "Meeting notes + process map", actors: "{service} team, users" },
        { title: "Solution", text: "Design and prototype {solution}.", deliverable: "Testable prototype", actors: "IT, provider if needed" },
        { title: "Testing", text: "Test the journeys with real users and adjust.", deliverable: "Approved test plan", actors: "Key {service} users" },
        { title: "Rollout", text: "Go live, communicate and support the {service} team.", deliverable: "Go-live + communication", actors: "{service}, internal communication" }
      ]
    }
  },

  international: {
    kicker: "International",
    title: "Looking elsewhere to build better here.",
    items: [
      { place: "Boston", detail: "2 learning expeditions", theme: "Entrepreneurship & artificial intelligence", value: "A culture of fast experimentation and practical AI use, useful to speed up the school's projects." },
      { place: "Singapore", detail: "1 learning expedition", theme: "Super apps & digital ecosystems", value: "An \"all-in-one\" view of services: a source of inspiration to simplify the student journey." }
    ]
  },

  timeline: {
    kicker: "Journey",
    title: "My work-study, step by step.",
    items: [
      { date: "Nov. 2025", title: "Joining the team", text: "Joined the Project Support & Promotion team." },
      { date: "2025 → 2026", title: "Discovery and structuring", text: "Getting to know departments, first business workshops and creation of the project kit." },
      { date: "2026", title: "Projects delivered and scoped", text: "Student One-Stop Desk delivered, studies on the Global Calendar and the post-exam process." },
      { date: "Nov. 2026", title: "Learning expedition to Boston", text: "Entrepreneurship and artificial intelligence." },
      { date: "Date to add", title: "Learning expedition to Singapore", text: "Super apps and digital ecosystems." },
      { date: "2026 → 2027", title: "Stepping up as a business analyst", text: "Leading larger projects and fast prototyping with AI." },
      { date: "Aug. 2027", title: "End of the work-study", text: "Goal: stay on permanently as Business Project Manager." }
    ]
  },

  feedback: {
    kicker: "Feedback",
    title: "Collaborations that go well, at every level.",
    domains: ["Business teams", "Project team", "Management"],
    keywords: ["Reliability", "Listening", "Responsiveness", "Creativity", "Service mindset"]
  },

  value: {
    kicker: "Tomorrow",
    title: "What I'll bring to EM Normandie on a permanent contract.",
    items: [
      { title: "Continuity", text: "Ongoing projects keep moving, with no loss of information or handover time." },
      { title: "Field knowledge", text: "I already know the departments, their tools and the people." },
      { title: "Growing as a business analyst", text: "I can lead larger projects from start to finish." },
      { title: "Fast prototyping", text: "With AI, I go faster from an idea to a testable mock-up." }
    ]
  },

  contact: {
    kicker: "Contact",
    title: "Let's talk about what's next.",
    text: "A question, a project, a need to scope? I reply quickly.",
    emailLabel: "Email me",
    linkedinLabel: "LinkedIn"
  },

  footer: {
    text: "Site designed and vibe coded by Hugo Leroux.",
    terminalHint: "Open the terminal"
  },

  terminal: {
    title: "hugo@em-normandie:~",
    welcome: "Welcome. Type \"help\" to see the commands.",
    help: [
      "help      list of commands",
      "projets   list of my projects",
      "contact   my contact details",
      "theme     toggle light / dark",
      "clear     clear the terminal",
      "exit      close the terminal"
    ],
    unknown: "Unknown command. Type \"help\"."
  }
};

/* ---------- Choix de la langue (français par défaut) ---------- */
(function () {
  var lang = "fr";
  try {
    var saved = localStorage.getItem("lang");
    if (saved === "fr" || saved === "en") lang = saved;
  } catch (e) {}
  window.LANG = lang;
  window.CONTENT = window.CONTENT_I18N[lang];
  document.documentElement.setAttribute("lang", lang);
})();
