import TechnologiesList from "@/components/TechnologiesList";
import styles from "./styles.module.scss";

type Props = {
  categories: {
    title: string;
    items: {
      logoSrc: string;
      name: string;
    }[];
  }[];
};

const Technologies = ({ categories }: Props) => {
  return (
    <section id={"technologies"} className={styles.technologies}>
      <div className={styles.gridWrapper}>
        <div className={styles.gridColumn}>
          <div className={styles.boxWrapper}>
            <div className={styles.box}>
              <h3>{categories[0].title}</h3>
              <TechnologiesList technologies={categories[0].items} />
            </div>
          </div>
          <div className={styles.boxWrapper}>
            <div className={styles.box}>
              <h3>{categories[1].title}</h3>
              <TechnologiesList technologies={categories[1].items} />
            </div>
          </div>
        </div>
        <div className={styles.gridColumn}>
          <div className={styles.boxWrapper}>
            <div className={styles.box}>
              <h3>{categories[2].title}</h3>
              <TechnologiesList technologies={categories[2].items} />
            </div>
          </div>
        </div>
        <div className={styles.gridColumn}>
          <div className={styles.boxWrapper}>
            <div className={styles.box}>
              <h3>{categories[3].title}</h3>
              <TechnologiesList technologies={categories[3].items} />
            </div>
          </div>
          <div className={styles.boxWrapper}>
            <div className={styles.box}>
              <h3>{categories[4].title}</h3>
              <TechnologiesList technologies={categories[4].items} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
