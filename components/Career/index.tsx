import styles from "./styles.module.scss";
import HeadlinePlaceholder from "@/components/HeadlinePlaceholder";
import RevealOnScroll from "@/components/RevealOnScroll";

const Career = () => {
  return (
    <>
      <HeadlinePlaceholder id={"career"} />
      <section className={styles.career}>
        <div className={styles.timestamps}>
          <div className={styles.timeline}>
            <div className={styles.arrowHead}></div>
          </div>
          <RevealOnScroll
            className={styles.timestamp}
            visibleClassName={styles.visible}
          >
            <div className={styles.time}>2024</div>
            <div className={styles.description}>
              <h3>
                Research exchange meet with Apple&nbsp;Park&nbsp;Cupertino
              </h3>
              <p>@ Apple Park Cupertino</p>
              <ul>
                <li>
                  Presentation of AR navigation system on
                  Apple&nbsp;Vision&nbsp;Pro
                </li>
              </ul>
            </div>
          </RevealOnScroll>
          <RevealOnScroll
            className={styles.timestamp}
            visibleClassName={styles.visible}
          >
            <div className={styles.time}>since 2023</div>
            <div className={styles.description}>
              <h3>Software Engineer & Scientific&nbsp;Assistant</h3>
              <p>@ Fraunhofer IWU</p>
              <ul>
                <li>
                  Lead development of an intrasurgical navigation app for Apple
                  Vision Pro and iOS
                </li>
                <li>Training of new employees</li>
              </ul>
            </div>
          </RevealOnScroll>
          <RevealOnScroll
            className={styles.timestamp}
            visibleClassName={styles.visible}
          >
            <div className={styles.time}>2022</div>
            <div className={styles.description}>
              <h3>Research exchange meet with UPMC&nbsp;Pittsburgh</h3>
              <p>@ UPMC Pittsburgh</p>
              <ul>
                <li>Presentation of AR navigation system on Hololens&nbsp;2</li>
              </ul>
            </div>
          </RevealOnScroll>
          <RevealOnScroll
            className={styles.timestamp}
            visibleClassName={styles.visible}
          >
            <div className={styles.time}>2021 - 2022</div>
            <div className={styles.description}>
              <h3>Software Engineer & Scientific&nbsp;Assistant</h3>
              <p>@ Leipzig University Hospital</p>
              <ul>
                <li>
                  Lead development of an intrasurgical navigation app on
                  Microsoft Hololens 2
                </li>
                <li>
                  Lead development of an AR-based multi-user teaching
                  application
                </li>
              </ul>
            </div>
          </RevealOnScroll>
          <RevealOnScroll
            className={styles.timestamp}
            visibleClassName={styles.visible}
          >
            <div className={styles.time}>since 2020</div>
            <div className={styles.description}>
              <h3>Owner & Software&nbsp;Engineer</h3>
              <p>@ M-to-B Software Agency</p>
              <ul>
                <li>
                  Development of apps, SaaS systems and sophisticated websites
                  on behalf of customers
                </li>
                <li>Development of in-house apps and software products</li>
                <li>Management of teams, projects, and customers</li>
                <li>Administration and business development</li>
              </ul>
            </div>
          </RevealOnScroll>
          <RevealOnScroll
            className={styles.timestamp}
            visibleClassName={styles.visible}
          >
            <div className={styles.time}>2020 - 2024</div>
            <div className={styles.description}>
              <h3>Bachelor of Science Computer&nbsp;Science</h3>
              <p>@ University Leipzig</p>
              <ul>
                <li>
                  Graduation with GPA <b>1.6</b>
                </li>
                <li>
                  Bachelor&apos;s thesis on &quot;Augmented Reality Navigation
                  for transnasal pituitary surgery&quot;
                </li>
                <li>
                  Emphasis on machine learning, database systems, and data
                  visualization
                </li>
              </ul>
            </div>
          </RevealOnScroll>
          <RevealOnScroll
            className={styles.timestamp}
            visibleClassName={styles.visible}
          >
            <div className={styles.time}>2020</div>
            <div className={styles.description}>
              <h3>
                Graduation from Highschool
                <br />
                (A levels / Abitur)
              </h3>
              <p>@ Christoph-Graupner-Gymnasium</p>
              <ul>
                <li>
                  Graduation with GPA <b>1.2</b>
                </li>
                <li>One of the best of the year (price awarded)</li>
                <li>Bilingual profile (in-depth language training)</li>
                <li>English (fluently), Spanish (basics), French (basics)</li>
              </ul>
            </div>
          </RevealOnScroll>
          <RevealOnScroll
            className={styles.timestamp}
            visibleClassName={styles.visible}
          >
            <div className={styles.time}>2020</div>
            <div className={styles.description}>
              <h3>5th Place Computer Science Contest</h3>
              <p>@ Computer Science Contest Saxony</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
};

export default Career;
