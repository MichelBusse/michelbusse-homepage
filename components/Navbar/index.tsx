"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles.module.scss";
import typewriterStyles from "@/components/TypeWriter/styles.module.scss";
import { useEffect, useState } from "react";
import {
  getLocaleFromPathname,
  localizePath,
  type Locale,
} from "@/lib/i18n";
import { siteContent } from "@/lib/site-content";

const Navbar = () => {
  const [currentSection, setCurrentSection] = useState("");
  const [mobileVisible, setMobileVisible] = useState(false);
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const content = siteContent[locale].navbar;

  const buildSectionHref = (section: string) => `/${locale}/#${section}`;
  const switchToLocale = (targetLocale: Locale) =>
    localizePath(pathname, targetLocale);

  useEffect(() => {
    const updateMenu = () => {
      // Relevant sections

      let headerSection = document.getElementById("header");
      let aboutSection = document.getElementById("about");
      let technologiesSection = document.getElementById("technologies");
      let portfolioSection =
        document.getElementById("portfolio");
      let careerSection = document.getElementById("career");
      let contactSection = document.getElementById("contact");

      if (
        headerSection == null ||
        aboutSection == null ||
        technologiesSection == null ||
        portfolioSection == null ||
        careerSection == null ||
        contactSection == null
      ) {
        setCurrentSection("");
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
        careerSection.offsetTop - window.innerHeight * 0.75
      ) {
        setCurrentSection("career");
      } else if (
        window.scrollY >=
        portfolioSection.offsetTop - window.innerHeight * 0.75
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

  useEffect(() => {
    setMobileVisible(false);
  }, [pathname]);

  return (
    <nav className={styles.navbar}>
      <Link href={`/${locale}`}>
        <div className={styles.logoWrapper}>
          <span>
            Michel Busse<span className={typewriterStyles.cursor}>|</span>
          </span>
        </div>
      </Link>
      <ul className={styles.mainMenu}>
        <Link href={buildSectionHref("about")}>
          <li className={currentSection == "about" ? styles.active : ""}>
            {content.about}
          </li>
        </Link>
        <Link href={buildSectionHref("portfolio")}>
          <li className={currentSection == "portfolio" ? styles.active : ""}>
            {content.portfolio}
          </li>
        </Link>
        <Link href={buildSectionHref("career")}>
          <li className={currentSection == "career" ? styles.active : ""}>
            {content.career}
          </li>
        </Link>
        <Link href={buildSectionHref("contact")}>
          <li className={currentSection == "contact" ? styles.active : ""}>
            {content.contact}
          </li>
        </Link>
      </ul>
      <div className={styles.actions}>
        <div className={styles.languageSwitch} aria-label={content.languageLabel}>
          <Link
            className={locale === "en" ? styles.languageActive : ""}
            href={switchToLocale("en")}
          >
            EN
          </Link>
          <Link
            className={locale === "de" ? styles.languageActive : ""}
            href={switchToLocale("de")}
          >
            DE
          </Link>
        </div>
      </div>
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
          <Link href={buildSectionHref("about")}>
            <li className={currentSection == "about" ? styles.active : ""}>
              {content.about}
            </li>
          </Link>
          <Link href={buildSectionHref("portfolio")}>
            <li className={currentSection == "portfolio" ? styles.active : ""}>
              {content.portfolio}
            </li>
          </Link>
          <Link href={buildSectionHref("career")}>
            <li className={currentSection == "career" ? styles.active : ""}>
              {content.career}
            </li>
          </Link>
          <Link href={buildSectionHref("contact")}>
            <li className={currentSection == "contact" ? styles.active : ""}>
              {content.contact}
            </li>
          </Link>
        </ul>
        <div className={styles.mobileLanguageSwitch}>
          <Link
            className={locale === "en" ? styles.languageActive : ""}
            href={switchToLocale("en")}
          >
            EN
          </Link>
          <Link
            className={locale === "de" ? styles.languageActive : ""}
            href={switchToLocale("de")}
          >
            DE
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
