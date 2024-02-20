import styles from "./Portfolio.module.scss";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";
import HeadlinePlaceholder from "./HeadlinePlaceholder";

const Portfolio = () => {
  return (
    <>
      <HeadlinePlaceholder id={"portfolio"} />
      <section className={styles.portfolio}>
        <div className={styles.project}>
          <div className={styles.imageWrapper}>
            <Image
              src={"/images/portfolio/clubz-social-network-app.png"}
              alt={"Social Network App - Clubz"}
              width="800"
              height="800"
            />
            <div className={styles.textWrapper}>
              <h3>Social Network App</h3>
              <p>
                <i>Clubz</i>
              </p>
              <div className={styles.iconButton}>
                <Link href={"/projects/social-network-app"}>
                  <MdOutlineArrowOutward />
                </Link>
              </div>
              <div className={styles.lowerIcons}>
                <Link
                  target={"_blank"}
                  href={"https://github.com/MichelBusse/clubz"}
                >
                  <FaGithub />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.imageWrapper}>
            <Image
              src={"/images/portfolio/schuelertreff-erp-system.png"}
              alt={"ERP SaaS System - Schuelertreff"}
              width="800"
              height="800"
            />
            <div className={styles.textWrapper}>
              <h3>SaaS ERP System</h3>
              <p>
                <i>Schuelertreff</i>
              </p>
              <div className={styles.iconButton}>
                <Link href={"/projects/saas-erp-system"}>
                  <MdOutlineArrowOutward />
                </Link>
              </div>
              <div className={styles.lowerIcons}>
                <Link
                  target={"_blank"}
                  href={
                    "https://github.com/MichelBusse/erp-system-schuelertreff"
                  }
                >
                  <FaGithub />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.imageWrapper}>
            <Image
              src={"/images/portfolio/ar-in-surgery-hololens-2.png"}
              alt={"AR in Surgery - Hololens 2"}
              width="800"
              height="800"
            />
            <div className={styles.textWrapper}>
              <h3>AR in Surgery - Hololens&nbsp;2</h3>
              <p>
                <i>University Hospital Leipzig</i>
              </p>
              <div className={styles.iconButton}>
                <Link href={"/projects/ar-in-surgery-hololens-2"}>
                  <MdOutlineArrowOutward />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.imageWrapper}>
            <Image
              src={"/images/portfolio/m-to-b-agency-homepage.png"}
              alt={"Software Agency Homepage M-to-B"}
              width="800"
              height="800"
            />
            <div className={styles.textWrapper}>
              <h3>Software Agency Homepage</h3>
              <p>
                <i>M-to-B Software</i>
              </p>
              <div className={styles.iconButton}>
                <Link href={"/projects/software-agency-homepage"}>
                  <MdOutlineArrowOutward />
                </Link>
              </div>
              <div className={styles.lowerIcons}>
                <Link
                  target={"_blank"}
                  href={"https://github.com/MichelBusse/m-to-b-homepage"}
                >
                  <FaGithub />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.imageWrapper}>
            <Image
              src={"/images/portfolio/ar-in-surgery-hololens-2.png"}
              alt={"AR in Surgery - Hololens 2"}
              width="800"
              height="800"
            />
            <div className={styles.textWrapper}>
              <h3>AR in Surgery - iOS & Apple&nbsp;Vision&nbsp;Pro</h3>
              <p>
                <i>University Hospital Leipzig</i>
              </p>
              <div className={styles.iconButton}>
                <Link href={"/projects/ar-in-surgery-ios-visionos"}>
                  <MdOutlineArrowOutward />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.imageWrapper}>
            <Image
              src={"/images/portfolio/special-solutions-management-system.png"}
              alt={"Management SaaS System - Special Solutions"}
              width="800"
              height="800"
            />
            <div className={styles.textWrapper}>
              <h3>SaaS Management System</h3>
              <p>
                <i>Special Solutions</i>
              </p>
              <div className={styles.iconButton}>
                <Link href={"/projects/saas-management-system"}>
                  <MdOutlineArrowOutward />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
