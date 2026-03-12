import styles from "@/styles/ProjectPage.module.scss";
import { FaLink } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
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

export default function ArInSurgeryHololens2({ params }: PageProps) {
  const locale = (params?.locale as Locale) || defaultLocale;
  const content = projectsContent[locale];
  const project = content.projects["ar-in-surgery-hololens-2"];

  return (
    <main className={styles.main}>
      <div className={styles.row}>
        <ProjectCell>
          <h1>
            <TypeWriter
              typewriterKey="ar-in-surgery-hololens-2"
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
              { logoSrc: "/images/technologies/unity.svg", name: "Unity" },
              { logoSrc: "/images/technologies/csharp.svg", name: "C#" },
              { logoSrc: "/images/technologies/mrtk.png", name: "MRTK" },
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
            <Link href={"https://www.next3d.de/"} target={"_blank"}>
              <li>
                <div className={styles.linkLogo}>
                  <FaLink />
                </div>
              </li>
            </Link>
            <Link
              href={
                "https://www.thieme-connect.com/products/ejournals/abstract/10.1055/a-2083-7766"
              }
              target={"_blank"}
            >
              <li>
                <div className={styles.linkLogo}>
                  <MdSchool />
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
            "/images/projects/ar-in-surgery-hololens-2/1.png",
            "/images/projects/ar-in-surgery-hololens-2/2.png",
            "/images/projects/ar-in-surgery-hololens-2/3.png",
            "/images/projects/ar-in-surgery-hololens-2/4.png",
            "/images/projects/ar-in-surgery-hololens-2/5.png",
            "/images/projects/ar-in-surgery-hololens-2/6.png",
          ]}
          captions={project.imageCaptions}
        />
      </div>
    </main>
  );
}
