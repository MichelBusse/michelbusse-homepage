import styles from "./Career.module.scss";
import HeadlinePlaceholder from "./HeadlinePlaceholder";

const Career = () => {
  return (
    <>
      <HeadlinePlaceholder id={"career"} />
      <section className={styles.career}>
        <div className={styles.timestamps}>
          <div className={styles.timestamp}>
            <div className={styles.time}>2022</div>
            <div className={styles.description}>
              <h3>Research exchange with Apple&nbsp;Park&nbsp;Cupertino</h3>
              <p>@ Apple Park Cupertino</p>
              <ul>
                <li>Presentation of AR navigation system on Vision Pro</li>
              </ul>
            </div>
          </div>
          <div className={styles.timeline}>
            <div className={styles.arrowHead}></div>
          </div>
          <div className={styles.timestamp}>
            <div className={styles.time}>since 2023</div>
            <div className={styles.description}>
              <h3>Senior Software Engineer & Scientific&nbsp;Assistant</h3>
              <p>@ Fraunhofer IWU</p>
              <ul>
                <li>Training new employees</li>
                <li>
                  Leading development of iOS app for AR based navigation in
                  surgery
                </li>
                <li>
                  Leading development of intrasurgical navigation app for Apple
                  Vision Pro
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.timestamp}>
            <div className={styles.time}>2022</div>
            <div className={styles.description}>
              <h3>Research exchange with UPMC&nbsp;Pittsburgh</h3>
              <p>@ UPMC Pittsburgh</p>
              <ul>
                <li>Presentation of AR navigation system</li>
              </ul>
            </div>
          </div>
          <div className={styles.timestamp}>
            <div className={styles.time}>2021 - 2022</div>
            <div className={styles.description}>
              <h3>Software Engineer & Scientific&nbsp;Assistant</h3>
              <p>@ Leipzig University Hospital</p>
              <ul>
                <li>
                  Leading development of AR based, multi-user application for
                  teaching of doctors and students
                </li>
                <li>
                  Leading development of intrasurgical navigation app for
                  Microsoft Hololens 2
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.timestamp}>
            <div className={styles.time}>since 2020</div>
            <div className={styles.description}>
              <h3>Owner & Software&nbsp;Engineer</h3>
              <p>@ M-to-B Software</p>
              <ul>
                <li>
                  Development of apps for Android, iOS and Web on behalf of
                  customers
                </li>
                <li>
                  Development of individual SaaS systems on behalf of customers
                </li>
                <li>Development of complex websites on behalf of customers</li>
                <li>Development of in-house apps and software products</li>
                <li>Management of teams and projects</li>
                <li>Administration and business development</li>
                <li>Communication with customers</li>
              </ul>
            </div>
          </div>
          <div className={styles.timestamp}>
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
          </div>
          <div className={styles.timestamp}>
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
                <li>Top of the year (price awarded)</li>
                <li>Bilingual profile (in-depth language training)</li>
                <li>English (fluently), Spanish (basics), French (basics)</li>
              </ul>
            </div>
          </div>
          <div className={styles.timestamp}>
            <div className={styles.time}>2019</div>
            <div className={styles.description}>
              <h3>5th Place Computer Science Contest</h3>
              <p>@ Computer Science Contest Saxony</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;
