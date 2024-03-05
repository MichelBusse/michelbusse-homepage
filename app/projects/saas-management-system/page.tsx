import styles from "@/styles/ProjectPage.module.scss";
import TypeWriter from "@/components/TypeWriter";
import ProjectImagesCell from "@/components/ProjectImagesCell";
import ProjectCell from "@/components/ProjectCell";
import TechnologiesList from "@/components/TechnologiesList";

export default function SaaSManagementSystem() {
  return (
    <main className={styles.main}>
      <div className={styles.row}>
        <ProjectCell>
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
        </ProjectCell>
        <div className={styles.placeholder} id={"projectPlaceholder"}></div>
      </div>
      <div className={styles.row}>
        <ProjectCell>
          <h2>Technologies</h2>
          <TechnologiesList
            technologies={[
              { logoSrc: "/images/technologies/react.svg", name: "React" },
              { logoSrc: "/images/technologies/nodejs.png", name: "NodeJS" },
              { logoSrc: "/images/technologies/postgresql.png", name: "PostgreSQL" },
              { logoSrc: "/images/technologies/aws.png", name: "AWS" },
            ]}
          />
        </ProjectCell>
      </div>
      <div className={styles.row}>
        <ProjectCell>
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
        </ProjectCell>
        <ProjectCell>
          <h2>Results</h2>
          <p>
            The outcome of the development process was a lightweight management
            system for projects and employees of the customer&apos;s company. By supporting
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
