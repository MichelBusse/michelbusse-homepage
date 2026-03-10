"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles.module.scss";
import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";
import { getLocaleFromPathname } from "@/lib/i18n";
import { siteContent } from "@/lib/site-content";

const Footer = () => {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const content = siteContent[locale].footer;

  return (
    <footer className={styles.footer}>
      <ul>
        <div className={styles.row}>
          <Link href={`/${locale}/imprint`}>
            <li>{content.imprint}</li>
          </Link>
          <Link href={`/${locale}/privacy-policy`}>
            <li>{content.privacyPolicy}</li>
          </Link>
        </div>
        <div className={styles.row}>
          <Link target="_blank" href={"https://www.linkedin.com/in/michel-busse"}>
            <li>
              <FaLinkedin />
            </li>
          </Link>
          <Link target="_blank" href={"https://github.com/MichelBusse"}>
            <li>
              <FaGithub />
            </li>
          </Link>
          <Link target="_blank" href={"https://stackoverflow.com/users/21434824/michel"}>
            <li>
              <FaStackOverflow />
            </li>
          </Link>
        </div>
      </ul>
    </footer>
  );
};

export default Footer;
