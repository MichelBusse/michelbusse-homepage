import Image from "next/image";
import styles from "../project.module.scss";
import listStyles from "../../TechnologiesList.module.scss";
import { FaLink } from "react-icons/fa";
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
              typewriterKey="social-network-app-clubz"
              autoStart={true}
            >
              AR in Surgery - iOS & Apple&nbsp;Vision&nbsp;Pro
            </TypeWriter>
          </h1>
          <div className={styles.subheadline}>University Hospital Leipzig</div>
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
                  src={"/images/technologies/visionos.svg"}
                  alt={"VisionOS Logo"}
                  width={10}
                  height={10}
                />
              </div>
              Native visionOS (Swift)
            </li>
            <li className={listStyles.technologyItem}>
              <div className={listStyles.technologyLogo}>
                <Image
                  src={"/images/technologies/ios.svg"}
                  alt={"IOS Logo"}
                  width={10}
                  height={10}
                />
              </div>
              Native iOS (Swift)
            </li>
            <li className={listStyles.technologyItem}>
              <div className={listStyles.technologyLogo}>
                <Image
                  src={"/images/technologies/realitykit.png"}
                  alt={"RealityKit Logo"}
                  width={10}
                  height={10}
                />
              </div>
              RealityKit
            </li>
            <li className={listStyles.technologyItem}>
              <div className={listStyles.technologyLogo}>
                <Image
                  src={"/images/technologies/arkit.webp"}
                  alt={"ARKit Logo"}
                  width={10}
                  height={10}
                />
              </div>
              ARKit
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
              href={"https://www.next3d.de/"}
              target={"_blank"}
            >
              <li>
                <div className={styles.linkLogo}>
                  <FaLink />
                </div>
              </li>
            </Link>
          </ul>
          <p>
            View more information on the projects website. 
          </p>
        </div>
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
          captions={[
            "AR navigation system at test in surgery",
            "Navigation view through Hololens",
            "Layout of main menu in Unity",
            "Positioning of DICOM data in Unity",
            "Observation of surgery with conventional navigation system",
            "Instrument for instrument tracking",
          ]}
        />
      </div>
    </main>
  );
}
