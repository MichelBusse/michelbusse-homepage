"use client";

import Image from "next/image";
import styles from "../project.module.scss";
import listStyles from "../../TechnologiesList.module.scss";
import TypeWriter from "@/app/components/TypeWriter";
import { useCallback, useState } from "react";
import ImageViewer from "react-simple-image-viewer";
import ProjectImagesCell from "@/app/components/ProjectImagesCell";

export default function SaaSManagementSystem() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    "/images/projects/social-network-app/1.png",
    "/images/projects/saas-management-system/2.png",
    "/images/projects/saas-management-system/3.png",
    "/images/projects/saas-management-system/4.png",
    "/images/projects/saas-management-system/5.png",
    "/images/projects/saas-management-system/6.png",
    "/images/projects/saas-management-system/7.png",
  ];

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <main className={styles.main}>
      <div className={styles.row}>
        <div className={styles.cell}>
          <h1>
            <TypeWriter typewriterKey="saas-management-system" autoStart={true}>
              SaaS Management System
            </TypeWriter>
          </h1>
          <div className={styles.subheadline}>Special-Solutions</div>
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
                  src={"/images/technologies/postgresql.png"}
                  alt={"PostgreSQL Logo"}
                  width={10}
                  height={10}
                />
              </div>
              PostgreSQL
            </li>
            <li className={listStyles.technologyItem}>
              <div className={listStyles.technologyLogo}>
                <Image
                  src={"/images/technologies/aws.png"}
                  alt={"AWS Logo"}
                  width={10}
                  height={10}
                />
              </div>
              Amazon Web Services
            </li>
            <li className={listStyles.technologyItem}>
              <div className={listStyles.technologyLogo}>
                <Image
                  src={"/images/technologies/nodejs.png"}
                  alt={"Nodejs Logo"}
                  width={10}
                  height={10}
                />
              </div>
              NodeJS
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.row}>
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
          captions={[
            "Manage schedule of employees",
            "View schedule of week",
            "View employees",
            "Manage details of employees",
            "View Projects",
            "Adjust projects",
            "Admin Settings",
          ]}
        />
      </div>
    </main>
  );
}
