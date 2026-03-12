import type { Locale } from "@/lib/i18n";

export type ProjectContent = {
  title: string;
  subtitle: string;
  descriptions: string[];
  challenges: string[];
  results: string[];
  linksText?: string;
  imageCaptions: string[];
};

export type ProjectsContent = {
  common: {
    technologies: string;
    challenges: string;
    results: string;
    links: string;
  };
  projects: {
    "ar-in-surgery-hololens-2": ProjectContent;
    "ar-in-surgery-ios-visionos": ProjectContent;
    "saas-erp-system": ProjectContent;
    "saas-management-system": ProjectContent;
    "social-network-app": ProjectContent;
    "software-agency-homepage": ProjectContent;
  };
};

export const projectsContent: Record<Locale, ProjectsContent> = {
  en: {
    common: {
      technologies: "Technologies",
      challenges: "Challenges",
      results: "Results",
      links: "Links",
    },
    projects: {
      "ar-in-surgery-hololens-2": {
        title: "AR in Surgery - Hololens 2",
        subtitle: "University Hospital Leipzig",
        descriptions: [
          "Despite advancements in technology, surgery still heavily relies on the expertise of the surgeon. Conventional navigation systems in neurosurgery are constrained by their significant space and time requirements. However, leveraging intuitive and space-saving solutions through AR technology could potentially address this issue.",
          "The objective of this project is to create a modular navigation software tailored for use at the University Hospital Leipzig. This development process involves direct collaboration with doctors and medical technicians to ensure alignment with their needs and expertise.",
        ],
        challenges: [
          "Because the Microsoft Hololens 2 being a rather unpopular and expensive platform, the resources for developing complex software are limited. Together with complicated documentation and an unusual setup, this lead to a challenging development experience.",
          "In terms of content, the biggest challenges were an accurate relationship between real world structures and virtual objects, a real-time tracking of instruments and a master-follower-mode to visualize the same experience on multiple devices. All this needed to be implemented while keeping the design as simple as possible to allow untrained users to find their way around on an unfamiliar platform.",
          "Communication with medical professionals turned out to be challenging as well, because of different technical terms and understandings of complexity.",
        ],
        results: [
          "The development process resulted in an intuitive and modular AR navigation system for the University Hospital Leipzig. The system supports localization of real world structures in the patient's body through a landmark based registration process. Any surgical instrument can be tracked in real-time by simply attaching markers and setting them up in the system. After importing standardized DICOM data, for example from MRI scans, the instrument position inside the patient's body can be visualized.",
          "Various extensions like a spatial drawing module to draw on body structures can be simply added to the system.",
          "Multiple precision studies confirmed the feasibility of surgical navigation with the Hololens 2 and further test the accuracy.",
        ],
        linksText:
          "View more information on the projects website or its scientific paper.",
        imageCaptions: [
          "AR navigation system at test in surgery",
          "Navigation view through Hololens",
          "Layout of main menu in Unity",
          "Positioning of DICOM data in Unity",
          "Observation of surgery with conventional navigation system",
          "Surgical instrument for tracking",
        ],
      },
      "ar-in-surgery-ios-visionos": {
        title: "AR in Surgery - iOS & Apple Vision Pro",
        subtitle: "University Hospital Leipzig",
        descriptions: [
          "This project connects to \"AR in Surgery - Hololens 2\".",
          "Beyond the HoloLens 2, iOS devices and the newly released Apple Vision Pro offer promising navigation capabilities during surgeries because of their diverse AR features.",
          "The Apple Vision Pro is particularly intriguing due to its sharp and precise display of AR content, while iOS systems are relevant primarily because of their widespread availability. A precise and intuitive navigation system on these platforms could be a groundbreaking advancement in medicine.",
        ],
        challenges: [
          "From the features perspective, the biggest challenges were the same as on the Hololens 2, like an accurate relationship between virtual content and real-world objects. But because the necessary calculations had already been implemented on the Hololens, the same calculations could now be used and ported to iOS and visionOS.",
          "Developing on two operate systems that are similar, but not the same needed good organization and a well-structured codebase. Because the Apple Vision was still unreleased in Germany, the development and testing had to be mostly improvised on the available simulator. Especially the required extensive communication between SwiftUI and RealityKit turned out to be challenging to implement.",
        ],
        results: [
          "The outcome of the development for iOS is an intuitive and compact prototype to bring surgical navigation abilities to common devices for the first time and therefore offer incredible new use cases.",
          "A working prototype on visionOS leads to promising opportunities in the near future. With the Apple Vision, there are various possibilities to increase the system's accuracy and functionality because of its state-of-the-art technology.",
          "Both operating systems now support the same functionalities as their counterpart on the Hololens.",
        ],
        linksText: "View more information on the projects website.",
        imageCaptions: [
          "Loading data from files",
          "Placing models in space",
          "Tracking of instrument and visualizing position on surface",
          "Tracking of instrument and visualizing position in brain",
        ],
      },
      "saas-erp-system": {
        title: "SaaS ERP System",
        subtitle: "Schuelertreff",
        descriptions: [
          "Schueletreff was a German startup in the education industry. They offered teaching services for private students and schools. Because of their rapid growth, managing and planning their lessons and teachers got nearly impossible.",
          "They needed a customized solution specifically for their needs and company. This was the start of an extensive management system that comprises nearly all parts of their business and became fundamental for their work.",
        ],
        challenges: [
          "The biggest challenges when developing the ERP system became the features themselves. A time matching system had to be implemented, where matching teachers and time slots are matched with available students. Furthermore, each teacher should have the ability to call in sick, where then all affected lessons should be presented to the admins and can easily be reassigned to other teachers. Personal data submitted by new teachers had to be validated, and the application process had to be represented in the app.",
          "Another big challenge in development was the communication with the client, to always be on the same page regarding every functionality. With all these features, the app must still remain intuitive and clear to the users.",
        ],
        results: [
          "The final system became an extensive web app, which exactly mapped and optimized the companies processes. Admins can manage every step of the application process, create new applicant accounts, request necessary data, automatically generate and provide work documents and provide subjects and school types for each teacher.",
          "Customers and schools can be created and, just like with teachers, saved with available time slots.",
          "A complex time matching system allows admins to create new recurring lessons by providing customers, requested subjects and optionally further filters. Then they get a list of available teachers which are appropriate for the specific clients and a list of possible matching time slots for these teachers.",
          "An admin dashboard summarizes all relevant data on one page. Teachers can view their individual schedule on their account and provide information for each lesson. They also can maintain their personal data and call themselves in sick when needed.",
        ],
        linksText: "Check out the source code on GitHub.",
        imageCaptions: [
          "Admin view of timetable",
          "Admin view of timetable with lessons of day",
          "Create new lesson - Choose avaiable teachers and timeslots",
          "Admin view dashboard",
          "Overview of teachers with subjects",
          "Details of teacher",
          "Details of teacher, document upload and actions",
          "Overview of subjects",
        ],
      },
      "saas-management-system": {
        title: "SaaS Management System",
        subtitle: "Special-Solutions",
        descriptions: [
          "Special Solutions is a services company from Germany. Their team used to manage all projects and operations of their employees through one local Microsoft Excel table.",
          "This system eventually couldn't cope anymore with the company's growth, and therefore they needed an easy-to-use and lightweight app to efficiently manage all projects and present the resulting individual schedules to their employees.",
        ],
        challenges: [
          "As is often the case, the real challenges in developing the software system lied in the details. Alongside with the support of real-time parallel editing, especially the implementation of comfort features like copy, paste and bulk operations turned out to be the most complex.",
          "Furthermore, a team system had to be implemented, where administrators can create teams and project managers with different permissions. Meanwhile, most of the features had to be customizable by the admins, like reordering employees in the management board or adjust the requested fields for the employee database. The database was a challenge itself, because the necessary connection to AWS and a secure transfer of all documents.",
        ],
        results: [
          "The outcome of the development process was a lightweight management system for projects and employees of the customer's company. By supporting real-time parallel editing and time saving comfort features, the company could increase their efficiency by a significant amount. The system comprises a database and a storage database for project and employee related data. A permission system allows project managers to manage their teams and plan their members schedules.",
          "Various customization options allow admins to further optimize and personalize the software to their workflow. Mobile access for customers automates the provision of individual schedules to the employees and removed the need to send each schedule to each person by hand.",
        ],
        imageCaptions: [
          "Manage schedule of employees",
          "View schedule of week",
          "View employees",
          "Manage details of employees",
          "View Projects",
          "Adjust projects",
          "Admin Settings",
        ],
      },
      "social-network-app": {
        title: "Social Network App",
        subtitle: "Clubz",
        descriptions: [
          "The idea for Clubz arose from the personal need for one place to look up local parties and plan the upcoming weekends with our friends.",
          "The solution was a social network for events, where users can view what their friends are up to, discover and share parties and manage their own.",
          "Simultaneously, club owners should have the opportunity to efficiently manage and promote their parties to a local audience, since there is no other current alternative to efficiently market events.",
        ],
        challenges: [
          "When developing the social network app, it was crucial to keep the UX design intuitive and efficient for new users, besides the need to support both, personal and business users. A well guarded security and permission system had to be set up to keep private user data private. This could be achieved with row level security policies in Supabases database system PostgreSQL. This system also made the implementation of queries with the necessary complexity and localization features possible.",
          "Furthermore, many APIs and services had to be connected and interlinked, to support all the apps features, like push notifications, Google Places and Facebook or Apple sign up. Finally, the whole app had to be optimized and reiterated multiple times, to align with all policies of Google and Apple to get approval on both stores.",
        ],
        results: [
          "Clubz became a scalable full-stack app, which is now live on the App Store, Google Play and web. The app allows for an intuitive creation of profiles and events. Various functionalities make the app a truly social network for its users, like following their friends, sharing events with them, uploading pictures and maintaining a diary of their own past events.",
          "Clubz allows for an easy discovery of local happenings and an overview of every important information at a glance. This means a huge advantage for both, personal and business users. Extensive features for professional hosts offer them further options to manage, promote and plan their events ahead.",
          "In summary, Clubz is able to solve the initial problem and now is at the beginning of building a local community",
        ],
        linksText:
          "Check out the source code on GitHub or the live version on Google Play and App Store.",
        imageCaptions: [
          "Feed Page with Filter",
          "Profile Page",
          "Create Events",
          "View Event Details",
          "Search Profiles",
          "View Followers",
          "Edit Profile Settings",
          "Filter for Feed Page",
          "Pick Location with Google Places",
          "Profile Page",
        ],
      },
      "software-agency-homepage": {
        title: "Software Agency Homepage",
        subtitle: "M-to-B Software",
        descriptions: [
          "The increasing number of private requests for development assistance, coupled with a passion for programming and team management, coalesced into the idea of founding a software agency.",
          "\"M-to-B Software\" meant building a company from the ground up, to help realize innovative visions of our clients.",
          "This resulted in the need for a capable homepage, which tells our story, explains our services and convinces new customers.",
        ],
        challenges: [
          "Building a software agency itself comes along with so many challenges and obstacles, it would be impossible to list them in one paragraph.",
          "In case of the homepage, the biggest challenge was search engine optimization to receive good rankings against our competitors. Simultaneously, we wanted to achieve a reasonable structure into understandable services and to provide a fully bilingual page.",
          "Last but not least, the website also had to look innovative and recognizable in comparison with our competitors.",
        ],
        results: [
          "The homepage for M-to-B Software became a responsive and modern website based on NextJS. It received top 10 Google ranking for competitive keywords in Germany and is ranking in top 3 for relevant local keywords.",
          "A comprehensive but innovative design conveys our message and services. These characteristics allowed the site to successfully generate multiple relevant customer requests per month and built a solid basis for the agency's customer acquisition.",
        ],
        linksText:
          "Check out the source code on GitHub or the live version of the website.",
        imageCaptions: [
          "Homepage",
          "App Development Page",
          "Augmented Reality Page",
          "Web Development Page",
          "Blog Page",
        ],
      },
    },
  },
  de: {
    common: {
      technologies: "Technologien",
      challenges: "Herausforderungen",
      results: "Ergebnisse",
      links: "Links",
    },
    projects: {
      "ar-in-surgery-hololens-2": {
        title: "AR im OP - Hololens 2",
        subtitle: "Universitätsklinikum Leipzig",
        descriptions: [
          "Trotz des technologischen Fortschritts ist die Chirurgie noch immer stark von der Expertise des Chirurgen abhängig. Herkömmliche Navigationssysteme in der Neurochirurgie sind durch ihren erheblichen Platz- und Zeitbedarf eingeschränkt. Durch die Nutzung intuitiver und platzsparender Lösungen durch AR-Technologie könnte dieses Problem potenziell gelöst werden.",
          "Das Ziel dieses Projekts ist die Entwicklung einer modularen Navigationssoftware, die speziell für den Einsatz am Universitätsklinikum Leipzig zugeschnitten ist. Dieser Entwicklungsprozess erfolgt in direkter Zusammenarbeit mit Ärzten und Medizintechnikern, um die Übereinstimmung mit ihren Bedürfnissen und Fachkenntnissen sicherzustellen.",
        ],
        challenges: [
          "Da die Microsoft Hololens 2 eine eher unbeliebte und teure Plattform ist, sind die Ressourcen für die Entwicklung komplexer Software begrenzt. Zusammen mit einer komplizierten Dokumentation und einem ungewöhnlichen Setup führte dies zu einer herausfordernden Entwicklung.",
          "Inhaltlich bestanden die größten Herausforderungen in einer präzisen Verknüpfung zwischen realen Strukturen und virtuellen Objekten, einer Echtzeitverfolgung von Instrumenten sowie einem Master-Follower-Modus, um dasselbe Erlebnis auf mehreren Geräten zu visualisieren. Dies musste umgesetzt werden, während das Design so einfach wie möglich gehalten wurde, damit sich ungeschulte Benutzer auf einer ungewohnten Plattform zurechtfinden können.",
          "Auch die Kommunikation mit dem medizinischen Fachpersonal erwies sich als herausfordernd, aufgrund unterschiedlicher Fachbegriffe und Auffassungen von Komplexität.",
        ],
        results: [
          "Der Entwicklungsprozess führte zu einem intuitiven und modularen AR-Navigationssystem für das Universitätsklinikum Leipzig. Das System unterstützt die Lokalisierung realer Strukturen im Körper des Patienten durch einen markenbasierten Registrierungsprozess. Jedes chirurgische Instrument kann in Echtzeit verfolgt werden, indem einfach Marker angebracht und im System eingerichtet werden. Nach dem Import von standardisierten DICOM-Daten, zum Beispiel aus MRT-Scans, kann die Position des Instruments im Körper des Patienten visualisiert werden.",
          "Verschiedene Erweiterungen wie ein räumliches Zeichenmodul zum Zeichnen auf Körperstrukturen können einfach zum System hinzugefügt werden.",
          "Mehrere Präzisionsstudien bestätigten die Machbarkeit der chirurgischen Navigation mit der Hololens 2 und untersuchten die Genauigkeit weiter.",
        ],
        linksText:
          "Weitere Informationen finden Sie auf der Projektwebsite oder im wissenschaftlichen Paper.",
        imageCaptions: [
          "AR-Navigationssystem im Testfeld im OP",
          "Navigationsansicht durch die Hololens",
          "Layout des Hauptmenüs in Unity",
          "Positionierung der DICOM-Daten in Unity",
          "Beobachtung der Operation mit herkömmlichem Navigationssystem",
          "Chirurgisches Instrument zur Nachverfolgung",
        ],
      },
      "ar-in-surgery-ios-visionos": {
        title: "AR im OP - iOS & Apple Vision Pro",
        subtitle: "Universitätsklinikum Leipzig",
        descriptions: [
          "Dieses Projekt knüpft an \"AR im OP - Hololens 2\" an.",
          "Neben der HoloLens 2 bieten iOS-Geräte und die neu veröffentlichte Apple Vision Pro aufgrund ihrer vielfältigen AR-Funktionen vielversprechende Navigationsmöglichkeiten während Operationen.",
          "Die Apple Vision Pro ist aufgrund ihrer scharfen und präzisen Darstellung von AR-Inhalten besonders interessant, während iOS-Systeme vor allem aufgrund ihrer weiten Verbreitung relevant sind. Ein präzises und intuitives Navigationssystem auf diesen Plattformen könnte ein bahnbrechender Fortschritt in der Medizin sein.",
        ],
        challenges: [
          "Aus funktionaler Perspektive waren die größten Herausforderungen dieselben wie bei der Hololens 2, etwa eine genaue Beziehung zwischen virtuellen Inhalten und realen Objekten. Da die erforderlichen Berechnungen jedoch bereits für die Hololens implementiert waren, konnten dieselben Berechnungen nun verwendet und auf iOS und visionOS portiert werden.",
          "Die Entwicklung auf zwei Betriebssystemen, die ähnlich, aber nicht gleich sind, erforderte eine gute Organisation und eine gut strukturierte Codebasis. Da die Apple Vision in Deutschland noch nicht veröffentlicht war, mussten Entwicklung und Tests größtenteils im verfügbaren Simulator improvisiert werden. Insbesondere die erforderliche umfangreiche Kommunikation zwischen SwiftUI und RealityKit stellte bei der Implementierung eine Herausforderung dar.",
        ],
        results: [
          "Das Ergebnis der Entwicklung für iOS ist ein intuitiver und kompakter Prototyp, der chirurgische Navigationsmöglichkeiten erstmals auf gängige Endgeräte bringt und damit unglaubliche neue Anwendungsfälle bietet.",
          "Ein funktionierender Prototyp auf visionOS führt zu vielversprechenden Möglichkeiten in der nahen Zukunft. Mit der Apple Vision gibt es aufgrund modernster Technologie vielfältige Möglichkeiten, die Genauigkeit und Funktionalität des Systems zu verbessern.",
          "Beide Betriebssysteme unterstützen nun dieselben Funktionalitäten wie ihr Pendant auf der Hololens.",
        ],
        linksText: "Weitere Informationen finden Sie auf der Projektwebsite.",
        imageCaptions: [
          "Laden von Daten aus Dateien",
          "Modelle im Raum platzieren",
          "Verfolgung des Instruments und Visualisierung der Position auf der Oberfläche",
          "Verfolgung des Instruments und Visualisierung der Position im Gehirn",
        ],
      },
      "saas-erp-system": {
        title: "SaaS-ERP-System",
        subtitle: "Schuelertreff",
        descriptions: [
          "Schuelertreff war ein deutsches Startup in der Bildungsbranche. Sie boten Nachhilfedienstleistungen für private Schüler und Schulen an. Aufgrund ihres rasanten Wachstums wurde das Management und die Planung ihrer Unterrichtsstunden und Lehrkräfte fast unmöglich.",
          "Sie benötigten eine maßgeschneiderte Lösung, die speziell auf ihre Bedürfnisse und ihr Unternehmen zugeschnitten ist. Dies war der Startschuss für ein umfangreiches Management-System, das fast alle Teile ihres Geschäfts umfasst und für ihre Arbeit grundlegend geworden ist.",
        ],
        challenges: [
          "Die größten Herausforderungen bei der Entwicklung des ERP-Systems wurden die Funktionen selbst. Es musste ein Zeit-Matching-System implementiert werden, bei dem passende Lehrkräfte und Zeitfenster mit verfügbaren Schülern abgeglichen werden. Außerdem sollte jeder Lehrer die Möglichkeit haben, sich krankzumelden, woraufhin alle betroffenen Stunden den Administratoren angezeigt und einfach anderen Lehrern zugewiesen werden können. Persönliche Daten, die von neuen Lehrkräften übermittelt wurden, mussten validiert werden, und der Bewerbungsprozess musste in der App abgebildet werden.",
          "Eine weitere große Herausforderung bei der Entwicklung war die Kommunikation mit dem Kunden, um hinsichtlich jeder Funktionalität immer auf demselben Stand zu sein. Bei all diesen Funktionen musste die App für die Nutzer intuitiv und übersichtlich bleiben.",
        ],
        results: [
          "Das fertige System wurde eine umfangreiche Web-App, die die Prozesse des Unternehmens genau abbildet und optimiert. Administratoren können jeden Schritt des Bewerbungsprozesses verwalten, Konten für neue Bewerber erstellen, notwendige Daten anfordern, Arbeitsdokumente automatisch generieren und bereitstellen und jedem Lehrer Fächer und Schularten zuweisen.",
          "Kunden und Schulen können erstellt und genau wie Lehrkräfte mit verfügbaren Zeitfenstern gespeichert werden.",
          "Ein komplexes Zeit-Matching-System ermöglicht es Administratoren, neue wiederkehrende Stunden zu erstellen, indem sie Kunden, gewünschte Fächer und optional weitere Filter angeben. Anschließend erhalten sie eine Liste verfügbarer Lehrkräfte, die für die entsprechenden Kunden geeignet sind, sowie eine Liste möglicher passender Zeitfenster für diese Lehrkräfte.",
          "Ein Admin-Dashboard fasst alle relevanten Daten auf einer Seite zusammen. Lehrkräfte können in ihrem Konto ihren individuellen Stundenplan einsehen und Informationen für jede Stunde angeben. Darüber hinaus können sie ihre persönlichen Daten pflegen und sich bei Bedarf krankmelden.",
        ],
        linksText: "Sehen Sie sich den Quellcode auf GitHub an.",
        imageCaptions: [
          "Admin-Ansicht des Stundenplans",
          "Admin-Ansicht des Stundenplans mit den Stunden des Tages",
          "Neue Unterrichtsstunde anlegen - Verfügbare Lehrkräfte und Zeitfenster auswählen",
          "Admin-Dashboard-Ansicht",
          "Übersicht der Lehrkräfte nach Fächern",
          "Details der Lehrkraft",
          "Details der Lehrkraft, Dokumenten-Upload und Aktionen",
          "Übersicht der Fächer",
        ],
      },
      "saas-management-system": {
        title: "SaaS-Management-System",
        subtitle: "Special-Solutions",
        descriptions: [
          "Special Solutions ist ein Dienstleistungsunternehmen aus Deutschland. Das Team verwaltete alle Projekte und Einsätze der Mitarbeiter über eine lokale Microsoft Excel-Tabelle.",
          "Dieses System konnte dem Wachstum des Unternehmens irgendwann nicht mehr standhalten, und deshalb brauchten sie eine einfach zu bedienende und leichtgewichtige App, um alle Projekte effizient zu verwalten und den Mitarbeitern die daraus resultierenden individuellen Dienstpläne bereitzustellen.",
        ],
        challenges: [
          "Wie so oft lagen die eigentlichen Herausforderungen bei der Entwicklung des Softwaresystems im Detail. Neben der Unterstützung der parallelen Echtzeitbearbeitung erwies sich insbesondere die Implementierung von Komfortfunktionen wie Kopieren, Einfügen und Massenoperationen als besonders komplex.",
          "Darüber hinaus musste ein Team-System implementiert werden, in dem Administratoren Teams und Projektmanager mit unterschiedlichen Berechtigungen anlegen können. Gleichzeitig mussten die meisten Funktionen für die Administratoren anpassbar sein, wie z.B. die Neuanordnung von Mitarbeitern auf der Verwaltungsoberfläche oder die Anpassung der abgefragten Felder für die Mitarbeiterdatenbank. Die Datenbank selbst war aufgrund der notwendigen Anbindung an AWS und der sicheren Übertragung aller Dokumente eine Herausforderung.",
        ],
        results: [
          "Das Ergebnis des Entwicklungsprozesses war ein leichtgewichtiges Managementsystem für Projekte und Mitarbeiter des Kundenunternehmens. Durch die Unterstützung von paralleler Echtzeit-Bearbeitung und zeitsparenden Komfortfunktionen konnte das Unternehmen seine Effizienz deutlich steigern. Das System umfasst eine Datenbank und eine Speicher-Datenbank für projekt- und mitarbeiterbezogene Daten. Ein Berechtigungssystem ermöglicht es Projektmanagern, ihre Teams zu verwalten und die Termine ihrer Mitglieder zu planen.",
          "Verschiedene Anpassungsmöglichkeiten erlauben es Administratoren, die Software weiter zu optimieren und an ihren Arbeitsablauf anzupassen. Der mobile Zugang für Kunden automatisiert die Bereitstellung individueller Dienstpläne an die Mitarbeiter und macht das manuelle Versenden jedes einzelnen Plans an jede Person überflüssig.",
        ],
        imageCaptions: [
          "Verwalten der Mitarbeiter-Zeitpläne",
          "Zeitplan der Woche ansehen",
          "Mitarbeiter ansehen",
          "Details der Mitarbeiter verwalten",
          "Projekte ansehen",
          "Projekte anpassen",
          "Admin-Einstellungen",
        ],
      },
      "social-network-app": {
        title: "Social-Network-App",
        subtitle: "Clubz",
        descriptions: [
          "Die Idee für Clubz entstand aus dem persönlichen Bedürfnis, einen zentralen Ort zu haben, an dem man nach lokalen Partys suchen und die kommenden Wochenenden mit Freunden planen kann.",
          "Die Lösung war ein soziales Netzwerk für Events, bei dem Nutzer sehen können, was ihre Freunde vorhaben, Partys entdecken, diese teilen und eigene verwalten können.",
          "Gleichzeitig sollten Clubbesitzer die Möglichkeit haben, ihre Partys effizient zu verwalten und bei einem lokalen Publikum zu bewerben, da es keine andere aktuelle Alternative gibt, um Events effizient zu vermarkten.",
        ],
        challenges: [
          "Bei der Entwicklung der Social-Network-App war es entscheidend, das UX-Design für neue Benutzer intuitiv und effizient zu gestalten, zusätzlich zu der Notwendigkeit, sowohl private als auch geschäftliche Nutzer zu unterstützen. Ein gut geschütztes Sicherheits- und Berechtigungssystem musste eingerichtet werden, um private Nutzerdaten privat zu halten. Dies konnte mit Sicherheitsrichtlinien auf der Ebene von Datenbankreihen (Row-Level Security) in Supabases Datenbanksystem PostgreSQL erreicht werden. Dieses System ermöglichte auch die Implementierung von Abfragen mit der erforderlichen Komplexität und den Lokalisierungsfunktionen.",
          "Darüber hinaus mussten viele APIs und Dienste angebunden und vernetzt werden, um alle App-Funktionen wie Push-Benachrichtigungen, Google Places sowie die Anmeldung über Facebook oder Apple zu unterstützen. Schließlich musste die gesamte App mehrfach optimiert und überarbeitet werden, um allen Richtlinien von Google und Apple gerecht zu werden und die Zulassung für beide Stores zu erhalten.",
        ],
        results: [
          "Clubz wurde eine skalierbare Full-Stack-App, die nun im App Store, bei Google Play und im Web verfügbar ist. Die App ermöglicht die intuitive Erstellung von Profilen und Events. Verschiedene Funktionen machen die App für die Benutzer zu einem echten sozialen Netzwerk, wie beispielsweise das Folgen von Freunden, das Teilen von Events mit ihnen, das Hochladen von Bildern und das Führen eines Tagebuchs über die eigenen vergangenen Events.",
          "Clubz ermöglicht die einfache Entdeckung von lokalen Veranstaltungen und einen Überblick über alle wichtigen Informationen auf einen Blick. Das bedeutet einen enormen Vorteil für private und geschäftliche Nutzer. Umfangreiche Funktionen für professionelle Gastgeber bieten ihnen weitere Möglichkeiten, ihre Events im Voraus zu verwalten, zu bewerben und zu planen.",
          "Zusammenfassend lässt sich sagen, dass Clubz das ursprüngliche Problem lösen kann und sich nun am Anfang des Aufbaus einer lokalen Community befindet.",
        ],
        linksText:
          "Sehen Sie sich den Quellcode auf GitHub oder die Live-Version bei Google Play und im App Store an.",
        imageCaptions: [
          "Feed-Seite mit Filter",
          "Profil-Seite",
          "Events erstellen",
          "Event-Details ansehen",
          "Profile durchsuchen",
          "Follower ansehen",
          "Profil-Einstellungen bearbeiten",
          "Filter für die Feed-Seite",
          "Ort mit Google Places auswählen",
          "Profil-Seite",
        ],
      },
      "software-agency-homepage": {
        title: "Homepage für Softwareagentur",
        subtitle: "M-to-B Software",
        descriptions: [
          "Die wachsende Zahl von privaten Anfragen nach Entwicklungsunterstützung, gepaart mit der Leidenschaft für Programmierung und Teammanagement, führte zu der Idee, eine Softwareagentur zu gründen.",
          "\"M-to-B Software\" bedeutete den Aufbau eines Unternehmens von Grund auf, um dabei zu helfen, innovative Visionen unserer Kunden zu verwirklichen.",
          "Daraus resultierte der Bedarf nach einer leistungsfähigen Homepage, die unsere Geschichte erzählt, unsere Dienstleistungen erklärt und neue Kunden überzeugt.",
        ],
        challenges: [
          "Der Aufbau einer Softwareagentur selbst bringt so viele Herausforderungen und Hindernisse mit sich, dass es unmöglich wäre, sie in einem Absatz aufzuzählen.",
          "Im Falle der Homepage bestand die größte Herausforderung in der Suchmaschinenoptimierung, um ein gutes Ranking im Vergleich zur Konkurrenz zu erzielen. Gleichzeitig wollten wir eine sinnvolle Strukturierung in verständliche Dienstleistungen erreichen und eine vollständig zweisprachige Seite anbieten.",
          "Nicht zuletzt musste die Website im Vergleich zur Konkurrenz auch innovativ und wiedererkennbar wirken.",
        ],
        results: [
          "Die Homepage für M-to-B Software wurde eine auf NextJS basierende responsive und moderne Website. Sie erreichte für umkämpfte Keywords in Deutschland ein Top-10-Google-Ranking und rankt für relevante lokale Keywords unter den Top 3.",
          "Ein umfassendes, aber innovatives Design vermittelt unsere Botschaft und Dienstleistungen. Diese Eigenschaften ermöglichten es der Website, jeden Monat mehrere relevante Kundenanfragen erfolgreich zu generieren, und bildeten eine solide Basis für die Kundenakquise der Agentur.",
        ],
        linksText:
          "Sehen Sie sich den Quellcode auf GitHub oder die Live-Version der Website an.",
        imageCaptions: [
          "Homepage",
          "Seite zur App-Entwicklung",
          "Seite zur Augmented Reality",
          "Seite zur Web-Entwicklung",
          "Blog-Seite",
        ],
      },
    },
  },
};
