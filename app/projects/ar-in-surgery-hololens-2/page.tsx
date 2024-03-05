import styles from "@/styles/ProjectPage.module.scss";
import { FaLink } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import Link from "next/link";
import TypeWriter from "@/components/TypeWriter";
import ProjectImagesCell from "@/components/ProjectImagesCell";
import ProjectCell from "@/components/ProjectCell";
import TechnologiesList from "@/components/TechnologiesList";

export default function SocialNetworkApp() {
  return (
    <main className={styles.main}>
      <div className={styles.row}>
        <ProjectCell>
          <h1>
            <TypeWriter
              typewriterKey="ar-in-surgery-hololens-2"
              autoStart={true}
            >
              AR in Surgery - Hololens&nbsp;2
            </TypeWriter>
          </h1>
          <div className={styles.subheadline}>University Hospital Leipzig</div>
          <p>
            Despite advancements in technology, surgery still heavily relies on
            the expertise of the surgeon. Conventional navigation systems in
            neurosurgery are constrained by their significant space and time
            requirements. However, leveraging intuitive and space-saving
            solutions through AR technology could potentially address this
            issue.
          </p>
          <p>
            The objective of this project is to create a modular navigation
            software tailored for use at the University Hospital Leipzig. This
            development process involves direct collaboration with doctors and
            medical technicians to ensure alignment with their needs and
            expertise.
          </p>
        </ProjectCell>
        <div className={styles.placeholder} id={"projectPlaceholder"}></div>
      </div>
      <div className={styles.row}>
        <ProjectCell>
          <h2>Technologies</h2>
          <TechnologiesList
            technologies={[
              { logoSrc: "/images/technologies/unity.svg", name: "Unity" },
              { logoSrc: "/images/technologies/csharp.svg", name: "C#" },
              { logoSrc: "/images/technologies/mrtk.png", name: "MRTK" },
              { logoSrc: "/images/technologies/opencv.png", name: "OpenCV" },
            ]}
          />
        </ProjectCell>
        <ProjectCell>
          <h2>Challenges</h2>
          <p>
            Because the Microsoft Hololens 2 being a rather unpopular and
            expensive platform, the resources for developing complex software
            are limited. Together with complicated documentation and an unusual
            setup, this lead to a challenging development experience.
          </p>
          <p>
            In terms of content, the biggest challenges were an accurate
            relationship between real world structures and virtual objects, a
            real-time tracking of instruments and a master-follower-mode to
            visualize the same experience on multiple devices. All this needed
            to be implemented while keeping the design as simple as possible to
            allow untrained users to find their way around on an unfamiliar
            platform.
          </p>
          <p>
            Communication with medical professionals turned out to be
            challenging as well, because of different technical terms and
            understandings of complexity.
          </p>
        </ProjectCell>
      </div>
      <div className={styles.row}>
        <ProjectCell>
          <h2>Results</h2>
          <p>
            The development process resulted in an intuitive and modular AR
            navigation system for the University Hospital Leipzig. The system
            supports localization of real world structures in the patient&apos;s
            body through a landmark based registration process. Any surgical
            instrument can be tracked in real-time by simply attaching markers
            and setting them up in the system. After importing standardized
            DICOM data, for example from MRI scans, the instrument position
            inside the patient&apos;s body can be visualized.
          </p>
          <p>
            Various extensions like a spatial drawing module to draw on body
            structures can be simply added to the system.
          </p>
          <p>
            Multiple precision studies confirmed the feasibility of surgical
            navigation with the Hololens 2 and further test the accuracy.
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
          <p>
            View more information on the projects website or its scientific
            paper.
          </p>
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
          captions={[
            "AR navigation system at test in surgery",
            "Navigation view through Hololens",
            "Layout of main menu in Unity",
            "Positioning of DICOM data in Unity",
            "Observation of surgery with conventional navigation system",
            "Surgical instrument for tracking",
          ]}
        />
      </div>
    </main>
  );
}
