import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";
import CTAButton from "@/components/CTAButton";
import TypeWriter from "@/components/TypeWriter";

type Props = {
  content: {
    preHeadline: string;
    slogan: string;
    cta: string;
    portraitAlt: string;
  };
};

const Header = ({ content }: Props) => {
  return (
    <header id={"header"} className={styles.header}>
      <div className={styles.textWrapper}>
        <div className={styles.text}>
          <p className={styles.preHeadline}>{content.preHeadline}</p>
          <h1>
            <TypeWriter typewriterKey="headline" autoStart={true}>
              Michel Busse
            </TypeWriter>
          </h1>
          <p className={styles.slogan}>
            {content.slogan.split("\n").map((line, index) => (
              <span key={line}>
                {index > 0 ? <br /> : null}
                {line}
              </span>
            ))}
          </p>
          <CTAButton label={content.cta} />
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
          alt={content.portraitAlt}
          width={1000}
          height={1000}
          priority
        />
      </div>
    </header>
  );
};

export default Header;
