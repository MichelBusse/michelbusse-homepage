import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";
import DiscoverMoreButton from "./DicoverMoreButton";
import TypeWriter from "./TypeWriter";

const Header = () => {
  return (
    <header id={"header"} className={styles.header}>
      <div className={styles.textWrapper}>
        <div className={styles.text}>
          <p className={styles.preHeadline}>Hey, my name is</p>
          <h1>
            <TypeWriter typewriterKey="headline" autoStart={true}>Michel Busse</TypeWriter>
          </h1>
          <p className={styles.slogan}>
            and I am a passionate
            <br /> software engineer.
          </p>
          <DiscoverMoreButton />
          <div className={styles.icons}>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/michel-busse"}
            >
              <FaLinkedin />
            </Link>
            <div className={styles.spacer}></div>
            <Link target="_blank" href={"https://github.com/MichelBusse"}>
              <FaGithub />
            </Link>
            <div className={styles.spacer}></div>
            <Link
              target="_blank"
              href={"https://stackoverflow.com/users/21434824/michel"}
            >
              <FaStackOverflow />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src={"/images/header.png"}
          alt="Header Portrait Photo"
          width={1000}
          height={1000}
          priority
        />
      </div>
    </header>
  );
};

export default Header;
