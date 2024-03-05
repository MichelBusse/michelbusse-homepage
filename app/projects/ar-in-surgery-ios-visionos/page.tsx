import styles from "@/styles/ProjectPage.module.scss";
import { FaLink } from "react-icons/fa";
import Link from "next/link";
import TypeWriter from "@/components/TypeWriter";
import ProjectImagesCell from "@/components/ProjectImagesCell";
import ProjectCell from "@/components/ProjectCell";
import TechnologiesList from "@/components/TechnologiesList";

export default function SocialNetworkAppClubz() {
  return (
    <main className={styles.main}>
      <div className={styles.row}>
        <ProjectCell>
          <h1>
            <TypeWriter
              typewriterKey="ar-in-surgery-ios-visionos"
              autoStart={true}
            >
              AR in Surgery - iOS & Apple&nbsp;Vision&nbsp;Pro
            </TypeWriter>
          </h1>
          <div className={styles.subheadline}>University Hospital Leipzig</div>
          <p>
            This project connects to{" "}
            <Link href={"/projects/ar-in-surgery-hololens-2"}>
              &quot;AR in Surgery - Hololens 2&quot;
            </Link>
            .
          </p>
          <p>
            Beyond the HoloLens 2, iOS devices and the newly released Apple
            Vision Pro offer promising navigation capabilities during surgeries
            because of their diverse AR features.
          </p>
          <p>
            The Apple Vision Pro is particularly intriguing due to its sharp and
            precise display of AR content, while iOS systems are relevant
            primarily because of their widespread availability. A precise and
            intuitive navigation system on these platforms could be a
            groundbreaking advancement in medicine.
          </p>
        </ProjectCell>
        <div className={styles.placeholder} id={"projectPlaceholder"}></div>
      </div>
      <div className={styles.row}>
        <ProjectCell>
          <h2>Technologies</h2>
          <TechnologiesList
            technologies={[
              { logoSrc: "/images/technologies/visionos.svg", name: "Native visionOS (Swift)" },
              { logoSrc: "/images/technologies/ios.svg", name: "Native iOS (Swift)" },
              { logoSrc: "/images/technologies/realitykit.png", name: "RealityKit" },
              { logoSrc: "/images/technologies/arkit.webp", name: "ARKit" },
              { logoSrc: "/images/technologies/nodejs.png", name: "NodeJS" },
            ]}
          />
        </ProjectCell>
        <ProjectCell>
          <h2>Challenges</h2>
          <p>
            From the features perspective, the biggest challenges were the same
            as on the Hololens 2, like an accurate relationship between virtual
            content and real-world objects. But because the necessary
            calculations had already been implemented on the Hololens, the same
            calculations could now be used and ported to iOS and visionOS.
          </p>
          <p>
            Developing on two operate systems that are similar, but not the same
            needed good organization and a well-structured codebase. Because the
            Apple Vision was still unreleased in Germany, the development and
            testing had to be mostly improvised on the available simulator.
            Especially the required extensive communication between SwiftUI and
            RealityKit turned out to be challenging to implement.
          </p>
        </ProjectCell>
      </div>
      <div className={styles.row}>
        <ProjectCell>
          <h2>Results</h2>
          <p>
            The outcome of the development for iOS is an intuitive and compact
            prototype to bring surgical navigation abilities to common devices
            for the first time and therefore offer incredible new use cases.
          </p>
          <p>
            A working prototype on visionOS leads to promising opportunities in
            the near future. With the Apple Vision, there are various
            possibilities to increase the system&apos;s accuracy and
            functionality because of its state-of-the-art technology.
          </p>
          <p>
            Both operating systems now support the same functionalities as their{" "}
            <Link href={"/projects/ar-in-surgery-hololens-2"}>
              counterpart on the Hololens
            </Link>
            .
          </p>
        </ProjectCell>
        <ProjectCell>
          <h2>Links</h2>
          <ul className={styles.linksList}>
            <Link href={"https://www.next3d.de/"} target={"_blank"}>
              <li>
                <div className={styles.linkLogo}>
                  <FaLink />
                </div>
              </li>
            </Link>
          </ul>
          <p>View more information on the projects website.</p>
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
          captions={[
            "Loading data from files",
            "Placing models in space",
            "Tracking of instrument and visualizing position on surface",
            "Tracking of instrument and visualizing position in brain",
          ]}
        />
      </div>
    </main>
  );
}
