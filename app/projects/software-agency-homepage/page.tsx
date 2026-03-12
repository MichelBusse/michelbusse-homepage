import styles from "@/styles/ProjectPage.module.scss";
import { FaGithub, FaLink } from "react-icons/fa";
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

export default function SoftwareAgencyHomepage({ params }: PageProps) {
  const locale = (params?.locale as Locale) || defaultLocale;
  const content = projectsContent[locale];
  const project = content.projects["software-agency-homepage"];

  return (
    <main className={styles.main}>
      <div className={styles.row}>
        <ProjectCell>
          <h1>
            <TypeWriter
              typewriterKey="software-agency-homepage"
              autoStart={true}
            >
              {project.title}
            </TypeWriter>
          </h1>
          <div className={styles.subheadline}>{project.subtitle}</div>
          {project.descriptions.map((desc, i) => (
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
              { logoSrc: "/images/technologies/nextjs.svg", name: "NextJS" },
              { logoSrc: "/images/technologies/react.svg", name: "React" },
              { logoSrc: "/images/technologies/typescript.svg", name: "TypeScript" },
              { logoSrc: "/images/technologies/nodejs.svg", name: "NodeJS" },
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
          {project.results.map((result, i) => (
            <p key={i}>{result}</p>
          ))}
        </ProjectCell>
        <ProjectCell>
          <h2>{content.common.links}</h2>
          <ul className={styles.linksList}>
            <Link
              href={"https://github.com/MichelBusse/clubz"}
              target={"_blank"}
            >
              <li>
                <div className={styles.linkLogo}>
                  <FaGithub />
                </div>
              </li>
            </Link>
            <Link href={"https://m-to-b.com/en"} target={"_blank"}>
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
            "/images/projects/software-agency-homepage/1.png",
            "/images/projects/software-agency-homepage/2.png",
            "/images/projects/software-agency-homepage/3.png",
            "/images/projects/software-agency-homepage/4.png",
            "/images/projects/software-agency-homepage/5.png",
          ]}
          captions={project.imageCaptions}
        />
      </div>
    </main>
  );
}
