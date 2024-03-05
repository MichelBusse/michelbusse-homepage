import styles from "./styles.module.scss";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";
import HeadlinePlaceholder from "@/components/HeadlinePlaceholder";
import RevealOnScroll from "../RevealOnScroll";

const Portfolio = () => {
  return (
    <>
      <HeadlinePlaceholder id={"portfolio"} />
      <section className={styles.portfolio}>
        <RevealOnScroll
          className={styles.project}
          visibleClassName={styles.visible}
        >
          <div className={styles.imageWrapper}>
            <Link href={"/projects/social-network-app"}>
              <Image
                src={"/images/portfolio/clubz-social-network-app.png"}
                alt={"Social Network App - Clubz"}
                width="800"
                height="800"
              />
            </Link>
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
        </RevealOnScroll>
        <RevealOnScroll
          className={styles.project}
          visibleClassName={styles.visible}
        >
          <div className={styles.imageWrapper}>
            <Link href={"/projects/saas-erp-system"}>
              <Image
                src={"/images/portfolio/schuelertreff-erp-system.png"}
                alt={"ERP SaaS System - Schuelertreff"}
                width="800"
                height="800"
              />
            </Link>
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
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll
          className={styles.project}
          visibleClassName={styles.visible}
        >
          <div className={styles.imageWrapper}>
            <Link href={"/projects/ar-in-surgery-hololens-2"}>
              <Image
                src={"/images/portfolio/ar-in-surgery-hololens-2.png"}
                alt={"AR in Surgery - Hololens 2"}
                width="800"
                height="800"
              />
            </Link>
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
        </RevealOnScroll>
        <RevealOnScroll
          className={styles.project}
          visibleClassName={styles.visible}
        >
          <div className={styles.imageWrapper}>
            <Link href={"/projects/software-agency-homepage"}>
              <Image
                src={"/images/portfolio/m-to-b-agency-homepage.png"}
                alt={"Software Agency Homepage M-to-B"}
                width="800"
                height="800"
              />
            </Link>
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
        </RevealOnScroll>
        <RevealOnScroll
          className={styles.project}
          visibleClassName={styles.visible}
        >
          <div className={styles.imageWrapper}>
            <Link href={"/projects/ar-in-surgery-ios-visionos"}>
              <Image
                src={"/images/portfolio/ar-in-surgery-ios-visionos.png"}
                alt={"AR in Surgery - Hololens 2"}
                width="800"
                height="800"
              />
            </Link>
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
        </RevealOnScroll>
        <RevealOnScroll
          className={styles.project}
          visibleClassName={styles.visible}
        >
          <div className={styles.imageWrapper}>
            <Link href={"/projects/saas-management-system"}>
              <Image
                src={
                  "/images/portfolio/special-solutions-management-system.png"
                }
                alt={"Management SaaS System - Special Solutions"}
                width="800"
                height="800"
              />
            </Link>
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
        </RevealOnScroll>
      </section>
    </>
  );
};

export default Portfolio;
