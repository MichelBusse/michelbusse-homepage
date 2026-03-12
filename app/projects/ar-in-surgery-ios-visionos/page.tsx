import styles from "@/styles/ProjectPage.module.scss";
import { FaLink } from "react-icons/fa";
import Link from "next/link";
import TypeWriter from "@/components/TypeWriter";
import ProjectImagesCell from "@/components/ProjectImagesCell";
import ProjectCell from "@/components/ProjectCell";
import TechnologiesList from "@/components/TechnologiesList";
import { projectsContent } from "@/lib/projects-content";
import { defaultLocale, type Locale } from "@/lib/i18n";

type PageProps = {
  params?: {
    locale?: string;
  };
};

export default function ArInSurgeryIosVisionOs({ params }: PageProps) {
  const locale = (params?.locale as Locale) || defaultLocale;
  const content = projectsContent[locale];
  const project = content.projects["ar-in-surgery-ios-visionos"];

  return (
    <main className={styles.main}>
      <div className={styles.row}>
        <ProjectCell>
          <h1>
            <TypeWriter
              typewriterKey="ar-in-surgery-ios-visionos"
              autoStart={true}
            >
              {project.title}
            </TypeWriter>
          </h1>
          <div className={styles.subheadline}>{project.subtitle}</div>
          <p>
            {locale === "de" ? "Dieses Projekt knüpft an " : "This project connects to "}
            <Link href={`/${locale}/projects/ar-in-surgery-hololens-2`}>
              {locale === "de" ? "\"AR im OP - Hololens 2\" an." : "\"AR in Surgery - Hololens 2\"."}
            </Link>
          </p>
          {project.descriptions.slice(1).map((desc, i) => (
            <p key={i}>{desc}</p>
          ))}
        </ProjectCell>
        <div className={styles.placeholder} id={"projectPlaceholder"}></div>
      </div>
      <div className={styles.row}>
        <ProjectCell>
          <h2>{content.common.technologies}</h2>
          <TechnologiesList
            technologies={[
              { logoSrc: "/images/technologies/visionos.svg", name: "visionOS (Swift)" },
              { logoSrc: "/images/technologies/ios.svg", name: "iOS (Swift)" },
              { logoSrc: "/images/technologies/realitykit.png", name: "RealityKit" },
              { logoSrc: "/images/technologies/arkit.webp", name: "ARKit" },
            ]}
          />
        </ProjectCell>
        <ProjectCell>
          <h2>{content.common.challenges}</h2>
          {project.challenges.map((challenge, i) => (
            <p key={i}>{challenge}</p>
          ))}
        </ProjectCell>
      </div>
      <div className={styles.row}>
        <ProjectCell>
          <h2>{content.common.results}</h2>
          {project.results.slice(0, 2).map((result, i) => (
            <p key={i}>{result}</p>
          ))}
          <p>
            {locale === "de" ? "Beide Betriebssysteme unterstützen nun dieselben Funktionalitäten wie ihr " : "Both operating systems now support the same functionalities as their "}
            <Link href={`/${locale}/projects/ar-in-surgery-hololens-2`}>
              {locale === "de" ? "Pendant auf der Hololens" : "counterpart on the Hololens"}
            </Link>
            .
          </p>
        </ProjectCell>
        <ProjectCell>
          <h2>{content.common.links}</h2>
          <ul className={styles.linksList}>
            <Link href={"https://www.next3d.de/"} target={"_blank"}>
              <li>
                <div className={styles.linkLogo}>
                  <FaLink />
                </div>
              </li>
            </Link>
          </ul>
          <p>{project.linksText}</p>
        </ProjectCell>
      </div>
      <div className={styles.row}>
        <ProjectImagesCell
          images={[
            "/images/projects/ar-in-surgery-ios-visionos/1.png",
            "/images/projects/ar-in-surgery-ios-visionos/2.png",
            "/images/projects/ar-in-surgery-ios-visionos/3.png",
            "/images/projects/ar-in-surgery-ios-visionos/4.png",
          ]}
          captions={project.imageCaptions}
        />
      </div>
    </main>
  );
}
