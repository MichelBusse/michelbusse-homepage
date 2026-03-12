import styles from "./styles.module.scss";
import HeadlinePlaceholder from "@/components/HeadlinePlaceholder";
import RevealOnScroll from "@/components/RevealOnScroll";

type Props = {
  entries: {
    time: string;
    title: string;
    company: string;
    bullets?: string[];
  }[];
};

const Career = ({ entries }: Props) => {
  return (
    <>
      <HeadlinePlaceholder id={"career"} />
      <section className={styles.career}>
        <div className={styles.timestamps}>
          <div className={styles.timeline}>
            <div className={styles.arrowHead}></div>
          </div>
          {entries.map((entry) => (
            <RevealOnScroll
              className={styles.timestamp}
              visibleClassName={styles.visible}
              key={`${entry.time}-${entry.title}`}
            >
              <div className={styles.time}>{entry.time}</div>
              <div className={styles.description}>
                <h3>{entry.title}</h3>
                <p>{entry.company}</p>
                {entry.bullets ? (
                  <ul>
                    {entry.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </>
  );
};

export default Career;
