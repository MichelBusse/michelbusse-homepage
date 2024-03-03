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
            <TypeWriter typewriterKey="saas-erp-system" autoStart={true}>
              SaaS ERP System
            </TypeWriter>
          </h1>
          <div className={styles.subheadline}>Schuelertreff</div>
          <p>
            Schueletreff was a German startup in the education industry. They
            offered teaching services for private students and schools. Because
            of their rapid growth, managing and planning their lessons and
            teachers got nearly impossible.
          </p>
          <p>
            They needed a customized solution specifically for their needs and
            company. This was the start of an extensive management system that
            comprises nearly all parts of their business and became fundamental
            for their work.
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
      </div>
      <div className={styles.row}>
        <div className={styles.cell}>
          <h2>Challenges</h2>
          <p>
            The biggest challenges when developing the ERP system became the
            features themselves. A time matching system had to be implemented,
            where matching teachers and time slots are matched with available
            students. Furthermore, each teacher should have the ability to call
            in sick, where then all affected lessons should be presented to the
            admins and can easily be reassigned to other teachers. Personal data
            submitted by new teachers had to be validated, and the application
            process had to be represented in the app.
          </p>
          <p>
            Another big challenge in development was the communication with the
            client, to always be on the same page regarding every functionality.
            With all these features, the app must still remain intuitive and
            clear to the users.
          </p>
        </div>
        <div className={styles.cell}>
          <h2>Results</h2>
          <p>
            The final system became an extensive web app, which exactly mapped
            and optimized the companies processes. Admins can manage every step
            of the application process, create new applicant accounts, request
            necessary data, automatically generate and provide work documents
            and provide subjects and school types for each teacher.
          </p>
          <p>
            Customers and schools can be created and, just like with teachers,
            saved with available time slots.
          </p>
          <p>
            A complex time matching system allows admins to create new recurring
            lessons by providing customers, requested subjects and optionally
            further filters. Then they get a list of available teachers which
            are appropriate for the specific clients and a list of possible
            matching time slots for these teachers.
          </p>
          <p>
            An admin dashboard summarizes all relevant data on one page.
            Teachers can view their individual schedule on their account and
            provide information for each lesson. They also can maintain their
            personal data and call themselves in sick when needed.
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
