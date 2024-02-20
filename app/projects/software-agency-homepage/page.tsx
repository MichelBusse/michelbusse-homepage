import Image from "next/image";
import styles from "../project.module.scss";
import listStyles from "../../TechnologiesList.module.scss";
import { FaGithub, FaLink } from "react-icons/fa";
import Link from "next/link";
import TypeWriter from "@/app/components/TypeWriter";
import ProjectImagesCell from "@/app/components/ProjectImagesCell";

export default function SocialNetworkAppClubz() {
  return (
    <main className={styles.main}>
      <div className={styles.row}>
        <div className={styles.cell}>
          <h1>
            <TypeWriter
              typewriterKey="software-agency-homepage"
              autoStart={true}
            >
              Software Agency Homepage
            </TypeWriter>
          </h1>
          <div className={styles.subheadline}>M-to-B Software</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam felis
            velit, finibus non erat ullamcorper, tempus ultricies elit. Praesent
            dui justo, lacinia ut dictum nec, sodales ac risus. Cras id libero
            vel dui efficitur pellentesque. Nulla sit amet ligula eget lectus
            suscipit fermentum sit amet id purus. Curabitur pellentesque
            accumsan enim et faucibus.
          </p>
        </div>
        <div className={styles.placeholder} id={"projectPlaceholder"}></div>
      </div>
      <div className={styles.row}>
        <div className={styles.cell}>
          <h2>Technologies</h2>
          <ul className={listStyles.technologiesList}>
            <li className={listStyles.technologyItem}>
              <div className={listStyles.technologyLogo}>
                <Image
                  src={"/images/technologies/nextjs.svg"}
                  alt={"Flutter Logo"}
                  width={10}
                  height={10}
                />
              </div>
              NextJS
            </li>
            <li className={listStyles.technologyItem}>
              <div className={listStyles.technologyLogo}>
                <Image
                  src={"/images/technologies/react.svg"}
                  alt={"React Logo"}
                  width={10}
                  height={10}
                />
              </div>
              React
            </li>
            <li className={listStyles.technologyItem}>
              <div className={listStyles.technologyLogo}>
                <Image
                  src={"/images/technologies/seo.png"}
                  alt={"SEO Logo"}
                  width={10}
                  height={10}
                />
              </div>
              Search Engine Optimization
            </li>
            <li className={listStyles.technologyItem}>
              <div className={listStyles.technologyLogo}>
                <Image
                  src={"/images/technologies/scrum.png"}
                  alt={"OneSignal Logo"}
                  width={10}
                  height={10}
                />
              </div>
              Scrum
            </li>
          </ul>
        </div>
        <div className={styles.cell}>
          <h2>Challenges</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam felis
            velit, finibus non erat ullamcorper, tempus ultricies elit. Praesent
            dui justo, lacinia ut dictum nec, sodales ac risus. Cras id libero
            vel dui efficitur pellentesque. Nulla sit amet ligula eget lectus
            suscipit fermentum sit amet id purus. Curabitur pellentesque
            accumsan enim et faucibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam felis
            velit, finibus non erat ullamcorper, tempus ultricies elit. Praesent
            dui justo, lacinia ut dictum nec, sodales ac risus. Cras id libero
            vel dui efficitur pellentesque. Nulla sit amet ligula eget lectus
            suscipit fermentum sit amet id purus. Curabitur pellentesque
            accumsan enim et faucibus.
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.cell}>
          <h2>Results</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam felis
            velit, finibus non erat ullamcorper, tempus ultricies elit. Praesent
            dui justo, lacinia ut dictum nec, sodales ac risus. Cras id libero
            vel dui efficitur pellentesque. Nulla sit amet ligula eget lectus
            suscipit fermentum sit amet id purus. Curabitur pellentesque
            accumsan enim et faucibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam felis
            velit, finibus non erat ullamcorper, tempus ultricies elit. Praesent
            dui justo, lacinia ut dictum nec, sodales ac risus. Cras id libero
            vel dui efficitur pellentesque. Nulla sit amet ligula eget lectus
            suscipit fermentum sit amet id purus. Curabitur pellentesque
            accumsan enim et faucibus.
          </p>
        </div>
        <div className={styles.cell}>
          <h2>Links</h2>
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
          <p>
            Check out the source code on GitHub or the live version of the
            website.
          </p>
        </div>
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
          captions={[
            "Homepage",
            "App Development Page",
            "Augmented Reality Page",
            "Web Development Page",
            "Blog Page",
          ]}
        />
      </div>
    </main>
  );
}
