import styles from "./styles.module.scss";
import Image from "next/image";

type Props = {
  technologies: { logoSrc: string; name: string }[];
};

export default function TechnologiesList(props: Props) {
  return (
    <ul className={styles.technologiesList}>
      {props.technologies.map((technology, index) => (
        <li className={styles.technologyItem} key={index}>
          <div className={styles.technologyLogo}>
            <Image
              src={technology.logoSrc}
              alt={`${technology.name} Logo`}
              width={40}
              height={40}
            />
          </div>
          {technology.name}
        </li>
      ))}
    </ul>
  );
}
