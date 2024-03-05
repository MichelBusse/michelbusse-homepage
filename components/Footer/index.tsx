import Link from "next/link";
import styles from "./styles.module.scss";
import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul>
        <div className={styles.row}>
          <Link href={"/imprint"}>
            <li>Imprint</li>
          </Link>
          <Link href={"/privacy-policy"}>
            <li>Privacy Policy</li>
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
