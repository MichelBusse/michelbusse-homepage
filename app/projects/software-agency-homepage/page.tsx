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
            The increasing number of private requests for development
            assistance, coupled with a passion for programming and team
            management, coalesced into the idea of founding a software agency.
          </p>
          <p>
            &quot;M-to-B Software&quot; meant building a company from the ground
            up, to help realize innovative visions of our clients.
          </p>
          <p>
            This resulted in the need for a capable homepage, which tells our
            story, explains our services and convinces new customers.
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
            Building a software agency itself comes along with so many
            challenges and obstacles, it would be impossible to list them in one
            paragraph.
          </p>
          <p>
            In case of the homepage, the biggest challenge was search engine
            optimization to receive good rankings against our competitors.
            Simultaneously, we wanted to achieve a reasonable structure into
            understandable services and to provide a fully bilingual page.
          </p>
          <p>
            Last but not least, the website also had to look innovative and
            recognizable in comparison with our competitors.
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.cell}>
          <h2>Results</h2>
          <p>
            The homepage for M-to-B Software became a responsive and modern
            website based on NextJS. It received top 10 Google ranking for
            competitive keywords in Germany and is ranking in top 3 for relevant
            local keywords.
          </p>
          <p>
            A comprehensive but innovative design conveys our message and
            services. These characteristics allowed the site to successfully
            generate multiple relevant customer requests per month and built a
            solid basis for the agency&apos;s customer acquisition.
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
