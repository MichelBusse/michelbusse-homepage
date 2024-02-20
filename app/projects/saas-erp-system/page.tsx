import Image from "next/image";
import styles from "../project.module.scss";
import listStyles from "../../TechnologiesList.module.scss";
import { FaGithub, FaAppStoreIos } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
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
              typewriterKey="saas-erp-system"
              autoStart={true}
            >
              SaaS ERP System
            </TypeWriter>
          </h1>
          <div className={styles.subheadline}>Schuelertreff</div>
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
                  src={"/images/technologies/vite.svg"}
                  alt={"Vite Logo"}
                  width={10}
                  height={10}
                />
              </div>
              Vite
            </li>
            <li className={listStyles.technologyItem}>
              <div className={listStyles.technologyLogo}>
                <Image
                  src={"/images/technologies/nest.svg"}
                  alt={"NestJS Logo"}
                  width={10}
                  height={10}
                />
              </div>
              NestJS
            </li>
            <li className={listStyles.technologyItem}>
              <div className={listStyles.technologyLogo}>
                <Image
                  src={"/images/technologies/postgresql.png"}
                  alt={"PostgreSQL Logo"}
                  width={10}
                  height={10}
                />
              </div>
              PostgreSQL
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
              href={"https://github.com/MichelBusse/erp-system-schuelertreff"}
              target={"_blank"}
            >
              <li>
                <div className={styles.linkLogo}>
                  <FaGithub />
                </div>
              </li>
            </Link>
          </ul>
          <p>
            Check out the source code on GitHub.
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <ProjectImagesCell
          images={[
            "/images/projects/saas-erp-system/1.png",
            "/images/projects/saas-erp-system/2.png",
            "/images/projects/saas-erp-system/3.png",
            "/images/projects/saas-erp-system/4.png",
            "/images/projects/saas-erp-system/5.png",
            "/images/projects/saas-erp-system/6.png",
            "/images/projects/saas-erp-system/7.png",
            "/images/projects/saas-erp-system/8.png",
          ]}
          captions={[
            "Admin view of timetable",
            "Admin view of timetable with lessons of day",
            "Create new lesson - Choose avaiable teachers and timeslots",
            "Admin view dashboard",
            "Overview of teachers with subjects",
            "Details of teacher",
            "Details of teacher, document upload and actions",
            "Overview of subjects",
          ]}
        />
      </div>
    </main>
  );
}
