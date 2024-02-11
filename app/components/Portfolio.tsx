import styles from "./Portfolio.module.scss";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

import Image from "next/image";

const Portfolio = () => {
  return (
    <section id={"portfolio"} className={styles.portfolio}>
      <div className={styles.project}>
        <div className={styles.imageWrapper}>
          <Image src={"/images/portfolio/clubz-social-network-app.png"} alt={"Social Network App - Clubz"} width="800" height="800" />
          <div className={styles.textWrapper}>
            <h3>Social Network App</h3>
            <p>
              <i>Clubz</i>
            </p>
            <div className={styles.iconButton}>
              <MdOutlineArrowOutward />
            </div>
            <div className={styles.lowerIcons}>
              <FaGithub />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.imageWrapper}>
          <Image src={"/images/portfolio/schuelertreff-erp-system.png"} alt={"ERP SaaS System - Schuelertreff"} width="800" height="800"  />
          <div className={styles.textWrapper}>
            <h3>SaaS ERP System</h3>
            <p>
              <i>Schuelertreff</i>
            </p>
            <div className={styles.iconButton}>
              <MdOutlineArrowOutward />
            </div>
            <div className={styles.lowerIcons}>
              <FaGithub />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.imageWrapper}>
          <Image src={"/images/portfolio/ar-in-surgery-hololens-2.png"} alt={"AR in Surgery - Hololens 2"} width="800" height="800"  />
          <div className={styles.textWrapper}>
            <h3>AR in Surgery - Hololens 2</h3>
            <p>
              <i>University Hospital Leipzig</i>
            </p>
            <div className={styles.iconButton}>
              <MdOutlineArrowOutward />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.imageWrapper}>
          <Image src={"/images/portfolio/m-to-b-agency-homepage.png"} alt={"Software Agency Homepage M-to-B"} width="800" height="800"  />
          <div className={styles.textWrapper}>
            <h3>Software Agency Homepage</h3>
            <p>
              <i>M-to-B</i>
            </p>
            <div className={styles.iconButton}>
              <MdOutlineArrowOutward />
            </div>
            <div className={styles.lowerIcons}>
              <FaGithub />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.imageWrapper}>
          <Image src={"/images/portfolio/ar-in-surgery-hololens-2.png"} alt={"AR in Surgery - Hololens 2"} width="800" height="800"  />
          <div className={styles.textWrapper}>
            <h3>AR in Surgery - Hololens 2</h3>
            <p>
              <i>University Hospital Leipzig</i>
            </p>
            <div className={styles.iconButton}>
              <MdOutlineArrowOutward />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.imageWrapper}>
          <Image src={"/images/portfolio/special-solutions-management-system.png"} alt={"Management SaaS System - Special Solutions"} width="800" height="800"  />
          <div className={styles.textWrapper}>
            <h3>SaaS Management System</h3>
            <p>
              <i>Special Solutions</i>
            </p>
            <div className={styles.iconButton}>
              <MdOutlineArrowOutward />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
