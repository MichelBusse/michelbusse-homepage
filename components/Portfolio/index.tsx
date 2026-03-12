import styles from "./styles.module.scss";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";
import HeadlinePlaceholder from "@/components/HeadlinePlaceholder";
import RevealOnScroll from "../RevealOnScroll";

type Props = {
  locale: string;
  projects: {
    title: string;
    subtitle: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
    githubHref?: string;
  }[];
};

const Portfolio = ({ locale, projects }: Props) => {
  const localizeProjectHref = (href: string) => `/${locale}${href}`;

  return (
    <>
      <HeadlinePlaceholder id={"portfolio"} />
      <section className={styles.portfolio}>
        {projects.map((project) => (
          <RevealOnScroll
            className={styles.project}
            visibleClassName={styles.visible}
            key={project.href}
          >
            <div className={styles.imageWrapper}>
              <Link href={localizeProjectHref(project.href)}>
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  width="800"
                  height="800"
                />
              </Link>
              <div className={styles.textWrapper}>
                <h3>{project.title}</h3>
                <p>
                  <i>{project.subtitle}</i>
                </p>
                <div className={styles.iconButton}>
                  <Link href={localizeProjectHref(project.href)}>
                    <MdOutlineArrowOutward />
                  </Link>
                </div>
                {project.githubHref ? (
                  <div className={styles.lowerIcons}>
                    <Link target={"_blank"} href={project.githubHref}>
                      <FaGithub />
                    </Link>
                  </div>
                ) : null}
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </section>
    </>
  );
};

export default Portfolio;
