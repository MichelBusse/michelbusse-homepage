import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header id={"header"} className={styles.header}>
      <div className={styles.textWrapper}>
        <div className={styles.text}>
          <p className={styles.preHeadline}>Hey, my name is</p>
          <h1>Michel Busse|</h1>
          <p className={styles.slogan}>
            and I am a passionate
            <br /> software engineer.
          </p>
          <Link href={"#about"}>
            <button>Discover More</button>
          </Link>
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
