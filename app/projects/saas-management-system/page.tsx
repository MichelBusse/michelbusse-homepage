import Image from "next/image";
import styles from "../project.module.scss";
import listStyles from "../../TechnologiesList.module.scss";
import TypeWriter from "@/app/components/TypeWriter";
import ProjectImagesCell from "@/app/components/ProjectImagesCell";

export default function SaaSManagementSystem() {
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
            Special Solutions is a services company from Germany. Their team
            used to manage all projects and operations of their employees
            through one local Microsoft Excel table.
          </p>
          <p>
            This system eventually couldn&apos;t cope anymore with the company&apos;s
            growth, and therefore they needed an easy-to-use and lightweight app
            to efficiently manage all projects and present the resulting
            individual schedules to their employees.
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
            As is often the case, the real challenges in developing the software
            system lied in the details. Alongside with the support of real-time
            parallel editing, especially the implementation of comfort features
            like copy, paste and bulk operations turned out to be the most
            complex.
          </p>
          <p>
            Furthermore, a team system had to be implemented, where
            administrators can create teams and project managers with different
            permissions. Meanwhile, most of the features had to be customizable
            by the admins, like reordering employees in the management board or
            adjust the requested fields for the employee database. The database
            was a challenge itself, because the necessary connection to AWS and
            a secure transfer of all documents.
          </p>
        </div>
        <div className={styles.cell}>
          <h2>Results</h2>
          <p>
            The outcome of the development process was a lightweight management
            system for projects and employees of the customer's company. By supporting
            real-time parallel editing and time saving comfort features, the
            company could increase their efficiency by a significant amount. The
            system comprises a database and a storage database for project and
            employee related data. A permission system allows project managers
            to manage their teams and plan their members schedules.
          </p>
          <p>
            Various customization options allow admins to further optimize and
            personalize the software to their workflow. Mobile access for
            customers automates the provision of individual schedules to the
            employees and removed the need to send each schedule to each person
            by hand.
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
