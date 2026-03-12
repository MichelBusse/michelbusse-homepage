import styles from "@/styles/ProjectPage.module.scss";
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

export default function SaaSManagementSystem({ params }: PageProps) {
  const locale = (params?.locale as Locale) || defaultLocale;
  const content = projectsContent[locale];
  const project = content.projects["saas-management-system"];

  return (
    <main className={styles.main}>
      <div className={styles.row}>
        <ProjectCell>
          <h1>
            <TypeWriter typewriterKey="saas-management-system" autoStart={true}>
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
              { logoSrc: "/images/technologies/react.svg", name: "React" },
              { logoSrc: "/images/technologies/nodejs.svg", name: "NodeJS" },
              { logoSrc: "/images/technologies/postgresql.png", name: "PostgreSQL" },
              { logoSrc: "/images/technologies/aws.png", name: "AWS" },
            ]}
          />
        </ProjectCell>
      </div>
      <div className={styles.row}>
        <ProjectCell>
          <h2>{content.common.challenges}</h2>
          {project.challenges.map((challenge, i) => (
            <p key={i}>{challenge}</p>
          ))}
        </ProjectCell>
        <ProjectCell>
          <h2>{content.common.results}</h2>
          {project.results.map((result, i) => (
            <p key={i}>{result}</p>
          ))}
        </ProjectCell>
      </div>
      <div className={styles.row}>
        <ProjectImagesCell
          images={[
            "/images/projects/saas-management-system/1.png",
            "/images/projects/saas-management-system/2.png",
            "/images/projects/saas-management-system/3.png",
            "/images/projects/saas-management-system/4.png",
            "/images/projects/saas-management-system/5.png",
            "/images/projects/saas-management-system/6.png",
            "/images/projects/saas-management-system/7.png",
          ]}
          captions={project.imageCaptions}
        />
      </div>
    </main>
  );
}
