"use client";

import Link from "next/link";
import styles from "./Navbar.module.scss";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [currentSection, setCurrentSection] = useState("");
  const [mobileVisible, setMobileVisible] = useState(false);

  useEffect(() => {
    const updateMenu = () => {
      // Relevant sections

      let headerSection = document.getElementById("header");
      let aboutSection = document.getElementById("about");
      let technologiesSection = document.getElementById("technologies");
      let portfolioHeadlineSection =
        document.getElementById("portfolioHeadline");
      let careerHeadlineSection = document.getElementById("careerHeadline");
      let contactSection = document.getElementById("contact");

      if (
        headerSection == null ||
        aboutSection == null ||
        technologiesSection == null ||
        portfolioHeadlineSection == null ||
        careerHeadlineSection == null ||
        contactSection == null
      ) {
        return;
      }

      // Change currentSection and sectionChangedTime if threshold is passed
      if (
        window.scrollY >=
        contactSection.offsetTop - window.innerHeight * 0.75
      ) {
        setCurrentSection("contact");
      } else if (
        window.scrollY >=
        careerHeadlineSection.offsetTop - window.innerHeight * 0.75
      ) {
        setCurrentSection("career");
      } else if (
        window.scrollY >=
        portfolioHeadlineSection.offsetTop - window.innerHeight * 0.75
      ) {
        setCurrentSection("portfolio");
      } else if (
        window.scrollY >=
        aboutSection.offsetTop - window.innerHeight * 0.75
      ) {
        setCurrentSection("about");
      } else if (
        window.scrollY >=
        headerSection.offsetTop - window.innerHeight * 0.75
      ) {
        setCurrentSection("header");
      }
    };

    updateMenu();

    document.addEventListener("scroll", updateMenu);
    window.addEventListener("resize", updateMenu);

    return () => {
      document.removeEventListener("scroll", updateMenu);
      window.removeEventListener("resize", updateMenu);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <Link href={"/"}>
        <div className={styles.logoWrapper}>
          <span>Michel Busse|</span>
        </div>
      </Link>
      <ul className={styles.mainMenu}>
        <Link href={"/#about"}>
          <li className={currentSection == "about" ? styles.active : ""}>
            About
          </li>
        </Link>
        <Link href={"/#portfolioHeadline"}>
          <li className={currentSection == "portfolio" ? styles.active : ""}>
            Portfolio
          </li>
        </Link>
        <Link href={"/#careerHeadline"}>
          <li className={currentSection == "career" ? styles.active : ""}>
            Career
          </li>
        </Link>
        <Link href={"/#contact"}>
          <li className={currentSection == "contact" ? styles.active : ""}>
            Contact
          </li>
        </Link>
      </ul>
      <button
        className={`${styles.mobileMenuButton} ${
          mobileVisible ? styles.active : ""
        }`}
        onClick={() => setMobileVisible((prev) => !prev)}
      >
        <div className={`${styles.bar} ${styles.bar1}`}></div>
        <div className={`${styles.bar} ${styles.bar2}`}></div>
        <div className={`${styles.bar} ${styles.bar3}`}></div>
      </button>
      <div
        className={`${styles.mobileMenu} ${
          mobileVisible ? styles.visible : ""
        }`}
      >
        <ul>
          <Link href={"/#about"}>
            <li className={currentSection == "about" ? styles.active : ""}>
              About
            </li>
          </Link>
          <Link href={"/#portfolioHeadline"}>
            <li className={currentSection == "portfolio" ? styles.active : ""}>
              Portfolio
            </li>
          </Link>
          <Link href={"/#careerHeadline"}>
            <li className={currentSection == "career" ? styles.active : ""}>
              Career
            </li>
          </Link>
          <Link href={"/#contact"}>
            <li className={currentSection == "contact" ? styles.active : ""}>
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
