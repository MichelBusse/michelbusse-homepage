import type { Locale } from "@/lib/i18n";

type TechnologyCategory = {
  title: string;
  items: {
    logoSrc: string;
    name: string;
  }[];
};

type PortfolioProject = {
  title: string;
  subtitle: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  githubHref?: string;
};

type CareerEntry = {
  time: string;
  title: string;
  company: string;
  bullets?: string[];
};

type SiteContent = {
  metadata: {
    title: string;
    description: string;
  };
  navbar: {
    about: string;
    portfolio: string;
    career: string;
    contact: string;
    languageLabel: string;
  };
  footer: {
    imprint: string;
    privacyPolicy: string;
  };
  header: {
    preHeadline: string;
    slogan: string;
    cta: string;
    portraitAlt: string;
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  technologies: TechnologyCategory[];
  portfolio: {
    projects: PortfolioProject[];
  };
  career: {
    entries: CareerEntry[];
  };
  contact: {
    title: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    privacyLabel: string;
    submitLabel: string;
    invalidToast: string;
    successToast: string;
    errorToast: string;
  };
};

export const siteContent: Record<Locale, SiteContent> = {
  en: {
    metadata: {
      title: "Michel Busse | Lead Software Engineer Portfolio",
      description:
        "Michel Busse is a Lead Software Engineer at MCI Solutions GmbH, building mobile, web, and XR products from Germany.",
    },
    navbar: {
      about: "About",
      portfolio: "Portfolio",
      career: "Career",
      contact: "Contact",
      languageLabel: "Language",
    },
    footer: {
      imprint: "Imprint",
      privacyPolicy: "Privacy Policy",
    },
    header: {
      preHeadline: "Hey, my name is",
      slogan: "and I am a passionate\nsoftware engineer.",
      cta: "Discover More",
      portraitAlt: "Portrait photo of Michel Busse",
    },
    about: {
      title: "About me",
      paragraphs: [
        "Hey there! I'm Michel, a passionate developer from Saxony, Germany.",
        "My coding journey began when I was 14, and it has been an exhilarating ride ever since. In 2020, alongside starting my bachelor's degree, I founded my own software agency. Presenting and refining our systems at prestigious venues like UPMC Pittsburgh and Apple Park Cupertino only deepened my passion for technology.",
        "Today, I work as Lead Software Engineer at MCI Solutions GmbH after being promoted in 2025. I focus on mobile product delivery, technical leadership, and building software that solves real business problems.",
        "I hope you enjoy browsing through my portfolio, and I look forward to hearing from you!",
      ],
    },
    technologies: [
      {
        title: "Web",
        items: [
          { logoSrc: "/images/technologies/react.svg", name: "React" },
          { logoSrc: "/images/technologies/typescript.svg", name: "TypeScript" },
          { logoSrc: "/images/technologies/nextjs.svg", name: "NextJS" },
          { logoSrc: "/images/technologies/threejs.png", name: "ThreeJS" },
        ],
      },
      {
        title: "VR / AR",
        items: [
          { logoSrc: "/images/technologies/unity.svg", name: "Unity" },
          { logoSrc: "/images/technologies/visionos.svg", name: "visionOS" },
          { logoSrc: "/images/technologies/mrtk.png", name: "MRTK" },
          { logoSrc: "/images/technologies/realitykit.png", name: "RealityKit" },
        ],
      },
      {
        title: "Backend / Data",
        items: [
          { logoSrc: "/images/technologies/nodejs.svg", name: "NodeJS" },
          { logoSrc: "/images/technologies/nest.svg", name: "NestJS" },
          { logoSrc: "/images/technologies/postgresql.png", name: "PostgreSQL" },
          { logoSrc: "/images/technologies/mongodb.svg", name: "MongoDB" },
          { logoSrc: "/images/technologies/redis.svg", name: "Redis" },
          { logoSrc: "/images/technologies/firebase.png", name: "Firebase" },
          { logoSrc: "/images/technologies/supabase.png", name: "Supabase" },
          { logoSrc: "/images/technologies/java.png", name: "Java" },
          { logoSrc: "/images/technologies/csharp.svg", name: "C#" },
          { logoSrc: "/images/technologies/python.png", name: "Python" },
        ],
      },
      {
        title: "Mobile",
        items: [
          { logoSrc: "/images/technologies/flutter.svg", name: "Flutter" },
          { logoSrc: "/images/technologies/ios.svg", name: "iOS (Swift)" },
          { logoSrc: "/images/technologies/android.svg", name: "Android (Kotlin)" },
        ],
      },
      {
        title: "Miscellaneous",
        items: [
          { logoSrc: "/images/technologies/git.png", name: "Git" },
          { logoSrc: "/images/technologies/docker.png", name: "Docker" },
          { logoSrc: "/images/technologies/aws.png", name: "AWS" },
          { logoSrc: "/images/technologies/googlecloud.svg", name: "Google Cloud" },
          { logoSrc: "/images/technologies/linux.png", name: "Linux" },
        ],
      },
    ],
    portfolio: {
      projects: [
        {
          title: "Social Network App",
          subtitle: "Clubz",
          href: "/projects/social-network-app",
          imageSrc: "/images/portfolio/clubz-social-network-app.png",
          imageAlt: "Clubz social network app preview",
          githubHref: "https://github.com/MichelBusse/clubz",
        },
        {
          title: "SaaS ERP System",
          subtitle: "Schuelertreff",
          href: "/projects/saas-erp-system",
          imageSrc: "/images/portfolio/schuelertreff-erp-system.png",
          imageAlt: "Schuelertreff ERP SaaS system preview",
          githubHref: "https://github.com/MichelBusse/erp-system-schuelertreff",
        },
        {
          title: "AR in Surgery - Hololens 2",
          subtitle: "University Hospital Leipzig",
          href: "/projects/ar-in-surgery-hololens-2",
          imageSrc: "/images/portfolio/ar-in-surgery-hololens-2.png",
          imageAlt: "AR in surgery with Hololens 2 preview",
        },
        {
          title: "Software Agency Homepage",
          subtitle: "M-to-B Software",
          href: "/projects/software-agency-homepage",
          imageSrc: "/images/portfolio/m-to-b-agency-homepage.png",
          imageAlt: "M-to-B software agency homepage preview",
          githubHref: "https://github.com/MichelBusse/m-to-b-homepage",
        },
        {
          title: "AR in Surgery - iOS & Apple Vision Pro",
          subtitle: "University Hospital Leipzig",
          href: "/projects/ar-in-surgery-ios-visionos",
          imageSrc: "/images/portfolio/ar-in-surgery-ios-visionos.png",
          imageAlt: "AR in surgery for iOS and Apple Vision Pro preview",
        },
        {
          title: "SaaS Management System",
          subtitle: "Special Solutions",
          href: "/projects/saas-management-system",
          imageSrc: "/images/portfolio/special-solutions-management-system.png",
          imageAlt: "Special Solutions SaaS management system preview",
        },
      ],
    },
    career: {
      entries: [
        {
          time: "since 2025",
          title: "Lead Software Engineer",
          company: "@ MCI Solutions GmbH",
          bullets: [
            "Promoted from Mobile App Engineer to Lead Software Engineer in 2025",
            "Technical leadership for cross-platform product development in the fitness and health space",
            "Project management across multiple product modules and stakeholders",
          ],
        },
        {
          time: "2024 - 2025",
          title: "Mobile App Engineer",
          company: "@ MCI Solutions GmbH",
          bullets: [
            "Development of a cross-platform app for a fitness and health startup",
            "Delivery ownership for several product modules",
          ],
        },
        {
          time: "2024",
          title: "Research exchange meet with Apple Park Cupertino",
          company: "@ Apple Park Cupertino",
          bullets: [
            "Presentation of AR navigation system on Apple Vision Pro",
          ],
        },
        {
          time: "since 2023",
          title: "Software Engineer & Scientific Assistant",
          company: "@ Fraunhofer IWU",
          bullets: [
            "Lead development of an intrasurgical navigation app for Apple Vision Pro and iOS",
            "Training of new employees",
          ],
        },
        {
          time: "2022",
          title: "Research exchange meet with UPMC Pittsburgh",
          company: "@ UPMC Pittsburgh",
          bullets: [
            "Presentation of AR navigation system on Hololens 2",
          ],
        },
        {
          time: "2021 - 2022",
          title: "Software Engineer & Scientific Assistant",
          company: "@ Leipzig University Hospital",
          bullets: [
            "Lead development of an intrasurgical navigation app on Microsoft Hololens 2",
            "Lead development of an AR-based multi-user teaching application",
          ],
        },
        {
          time: "since 2020",
          title: "Owner & Software Engineer",
          company: "@ M-to-B Software Agency",
          bullets: [
            "Development of apps, SaaS systems and sophisticated websites on behalf of customers",
            "Development of in-house apps and software products",
            "Management of teams, projects, and customers",
            "Administration and business development",
          ],
        },
        {
          time: "2020 - 2024",
          title: "Bachelor of Science Computer Science",
          company: "@ University Leipzig",
          bullets: [
            "Graduation with GPA 1.6",
            "Bachelor's thesis on Augmented Reality Navigation for transnasal pituitary surgery",
            "Emphasis on machine learning, database systems, and data visualization",
          ],
        },
        {
          time: "2020",
          title: "Graduation from High School (A levels / Abitur)",
          company: "@ Christoph-Graupner-Gymnasium",
          bullets: [
            "Graduation with GPA 1.2",
            "One of the best of the year (prize awarded)",
            "Bilingual profile (in-depth language training)",
            "English (fluent), Spanish (basic), French (basic)",
          ],
        },
        {
          time: "2020",
          title: "5th Place Computer Science Contest",
          company: "@ Computer Science Contest Saxony",
        },
      ],
    },
    contact: {
      title: "Contact",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Your Message",
      privacyLabel: "I accept the privacy policy",
      submitLabel: "Submit",
      invalidToast: "Error! Please check your inputs.",
      successToast: "Sent successfully!",
      errorToast: "Error! Please send an email instead.",
    },
  },
  de: {
    metadata: {
      title: "Michel Busse | Lead Software Engineer Portfolio",
      description:
        "Michel Busse ist Lead Software Engineer bei der MCI Solutions GmbH und entwickelt mobile, webbasierte und XR-Produkte aus Deutschland.",
    },
    navbar: {
      about: "Über mich",
      portfolio: "Portfolio",
      career: "Karriere",
      contact: "Kontakt",
      languageLabel: "Sprache",
    },
    footer: {
      imprint: "Impressum",
      privacyPolicy: "Datenschutz",
    },
    header: {
      preHeadline: "Hi, ich bin",
      slogan: "und ich bin leidenschaftlicher\nSoftware Engineer.",
      cta: "Mehr erfahren",
      portraitAlt: "Porträtfoto von Michel Busse",
    },
    about: {
      title: "Über mich",
      paragraphs: [
        "Hi! Ich bin Michel, ein leidenschaftlicher Entwickler aus Sachsen.",
        "Meine Reise mit dem Programmieren begann mit 14 Jahren und begeistert mich seitdem jeden Tag aufs Neue. 2020 habe ich parallel zum Start meines Informatikstudiums meine eigene Softwareagentur gegründet. Die Präsentation und Weiterentwicklung unserer Systeme an Orten wie UPMC Pittsburgh und Apple Park Cupertino hat meine Begeisterung für Technologie weiter verstärkt.",
        "Heute arbeite ich als Lead Software Engineer bei der MCI Solutions GmbH, nachdem ich dort 2025 vom Mobile App Engineer befördert wurde. Mein Fokus liegt auf mobiler Produktentwicklung, technischer Führung und Software, die echte Geschäftsprobleme löst.",
        "Ich wünsche viel Freude beim Durchsehen meines Portfolios und freue mich auf Ihre Nachricht!",
      ],
    },
    technologies: [
      {
        title: "Web",
        items: [
          { logoSrc: "/images/technologies/react.svg", name: "React" },
          { logoSrc: "/images/technologies/typescript.svg", name: "TypeScript" },
          { logoSrc: "/images/technologies/nextjs.svg", name: "NextJS" },
          { logoSrc: "/images/technologies/threejs.png", name: "ThreeJS" },
        ],
      },
      {
        title: "VR / AR",
        items: [
          { logoSrc: "/images/technologies/unity.svg", name: "Unity" },
          { logoSrc: "/images/technologies/visionos.svg", name: "visionOS" },
          { logoSrc: "/images/technologies/mrtk.png", name: "MRTK" },
          { logoSrc: "/images/technologies/realitykit.png", name: "RealityKit" },
        ],
      },
      {
        title: "Backend / Daten",
        items: [
          { logoSrc: "/images/technologies/nodejs.svg", name: "NodeJS" },
          { logoSrc: "/images/technologies/nest.svg", name: "NestJS" },
          { logoSrc: "/images/technologies/postgresql.png", name: "PostgreSQL" },
          { logoSrc: "/images/technologies/mongodb.svg", name: "MongoDB" },
          { logoSrc: "/images/technologies/redis.svg", name: "Redis" },
          { logoSrc: "/images/technologies/firebase.png", name: "Firebase" },
          { logoSrc: "/images/technologies/supabase.png", name: "Supabase" },
          { logoSrc: "/images/technologies/java.png", name: "Java" },
          { logoSrc: "/images/technologies/csharp.svg", name: "C#" },
          { logoSrc: "/images/technologies/python.png", name: "Python" },
        ],
      },
      {
        title: "Mobile",
        items: [
          { logoSrc: "/images/technologies/flutter.svg", name: "Flutter" },
          { logoSrc: "/images/technologies/ios.svg", name: "iOS (Swift)" },
          { logoSrc: "/images/technologies/android.svg", name: "Android (Kotlin)" },
        ],
      },
      {
        title: "Sonstiges",
        items: [
          { logoSrc: "/images/technologies/git.png", name: "Git" },
          { logoSrc: "/images/technologies/docker.png", name: "Docker" },
          { logoSrc: "/images/technologies/aws.png", name: "AWS" },
          { logoSrc: "/images/technologies/googlecloud.svg", name: "Google Cloud" },
          { logoSrc: "/images/technologies/linux.png", name: "Linux" },
        ],
      },
    ],
    portfolio: {
      projects: [
        {
          title: "Social-Network-App",
          subtitle: "Clubz",
          href: "/projects/social-network-app",
          imageSrc: "/images/portfolio/clubz-social-network-app.png",
          imageAlt: "Vorschau der Clubz Social-Network-App",
          githubHref: "https://github.com/MichelBusse/clubz",
        },
        {
          title: "SaaS-ERP-System",
          subtitle: "Schuelertreff",
          href: "/projects/saas-erp-system",
          imageSrc: "/images/portfolio/schuelertreff-erp-system.png",
          imageAlt: "Vorschau des Schuelertreff ERP-SaaS-Systems",
          githubHref: "https://github.com/MichelBusse/erp-system-schuelertreff",
        },
        {
          title: "AR im OP - Hololens 2",
          subtitle: "Universitätsklinikum Leipzig",
          href: "/projects/ar-in-surgery-hololens-2",
          imageSrc: "/images/portfolio/ar-in-surgery-hololens-2.png",
          imageAlt: "Vorschau AR im OP mit Hololens 2",
        },
        {
          title: "Homepage für Softwareagentur",
          subtitle: "M-to-B Software",
          href: "/projects/software-agency-homepage",
          imageSrc: "/images/portfolio/m-to-b-agency-homepage.png",
          imageAlt: "Vorschau der M-to-B Softwareagentur-Homepage",
          githubHref: "https://github.com/MichelBusse/m-to-b-homepage",
        },
        {
          title: "AR im OP - iOS & Apple Vision Pro",
          subtitle: "Universitätsklinikum Leipzig",
          href: "/projects/ar-in-surgery-ios-visionos",
          imageSrc: "/images/portfolio/ar-in-surgery-ios-visionos.png",
          imageAlt: "Vorschau AR im OP für iOS und Apple Vision Pro",
        },
        {
          title: "SaaS-Management-System",
          subtitle: "Special Solutions",
          href: "/projects/saas-management-system",
          imageSrc: "/images/portfolio/special-solutions-management-system.png",
          imageAlt: "Vorschau des SaaS-Management-Systems von Special Solutions",
        },
      ],
    },
    career: {
      entries: [
        {
          time: "seit 2025",
          title: "Lead Software Engineer",
          company: "@ MCI Solutions GmbH",
          bullets: [
            "2025 Beförderung vom Mobile App Engineer zum Lead Software Engineer",
            "Technische Führung für die plattformübergreifende Produktentwicklung im Fitness- und Gesundheitsumfeld",
            "Projektmanagement über mehrere Produktmodule und Stakeholder hinweg",
          ],
        },
        {
          time: "2024 - 2025",
          title: "Mobile App Engineer",
          company: "@ MCI Solutions GmbH",
          bullets: [
            "Entwicklung einer plattformübergreifenden App für ein Fitness- und Gesundheits-Startup",
            "Verantwortung für die Umsetzung mehrerer Produktmodule",
          ],
        },
        {
          time: "2024",
          title: "Forschungsaustausch mit Apple Park Cupertino",
          company: "@ Apple Park Cupertino",
          bullets: [
            "Präsentation eines AR-Navigationssystems auf der Apple Vision Pro",
          ],
        },
        {
          time: "seit 2023",
          title: "Software Engineer & Wissenschaftlicher Mitarbeiter",
          company: "@ Fraunhofer IWU",
          bullets: [
            "Leitende Entwicklung einer intraoperativen Navigations-App für Apple Vision Pro und iOS",
            "Einarbeitung neuer Mitarbeitender",
          ],
        },
        {
          time: "2022",
          title: "Forschungsaustausch mit UPMC Pittsburgh",
          company: "@ UPMC Pittsburgh",
          bullets: [
            "Präsentation eines AR-Navigationssystems auf der Hololens 2",
          ],
        },
        {
          time: "2021 - 2022",
          title: "Software Engineer & Wissenschaftlicher Mitarbeiter",
          company: "@ Universitätsklinikum Leipzig",
          bullets: [
            "Leitende Entwicklung einer intraoperativen Navigations-App auf der Microsoft Hololens 2",
            "Leitende Entwicklung einer AR-basierten Multi-User-Lehranwendung",
          ],
        },
        {
          time: "seit 2020",
          title: "Inhaber & Software Engineer",
          company: "@ M-to-B Software Agency",
          bullets: [
            "Entwicklung von Apps, SaaS-Systemen und anspruchsvollen Websites für Kunden",
            "Entwicklung eigener Apps und Softwareprodukte",
            "Management von Teams, Projekten und Kunden",
            "Administration und Geschäftsentwicklung",
          ],
        },
        {
          time: "2020 - 2024",
          title: "Bachelor of Science Informatik",
          company: "@ Universität Leipzig",
          bullets: [
            "Abschlussnote 1,6",
            "Bachelorarbeit zum Thema Augmented-Reality-Navigation für die transnasale Hypophysenchirurgie",
            "Schwerpunkte in Machine Learning, Datenbanksystemen und Datenvisualisierung",
          ],
        },
        {
          time: "2020",
          title: "Abitur",
          company: "@ Christoph-Graupner-Gymnasium",
          bullets: [
            "Abschlussnote 1,2",
            "Einer der Jahrgangsbesten (ausgezeichnet)",
            "Bilinguales Profil (vertiefte Sprachausbildung)",
            "Englisch (fließend), Spanisch (Grundlagen), Französisch (Grundlagen)",
          ],
        },
        {
          time: "2020",
          title: "5. Platz Informatikwettbewerb",
          company: "@ Informatikwettbewerb Sachsen",
        },
      ],
    },
    contact: {
      title: "Kontakt",
      emailPlaceholder: "Ihre E-Mail",
      messagePlaceholder: "Ihre Nachricht",
      privacyLabel: "Ich akzeptiere die Datenschutzerklärung",
      submitLabel: "Absenden",
      invalidToast: "Fehler! Bitte prüfen Sie Ihre Eingaben.",
      successToast: "Erfolgreich gesendet!",
      errorToast: "Fehler! Bitte senden Sie stattdessen eine E-Mail.",
    },
  },
};
