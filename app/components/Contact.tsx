import styles from "./Contact.module.scss";
import circleSectionStyle from "./CircleSection.module.scss";
import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";

const Contact = () => {
  return (
    <section id={"contact"} className={circleSectionStyle.circleSection}>
      <div className={circleSectionStyle.placeholder}></div>
      <div className={circleSectionStyle.textWrapper}>
        <div className={styles.text}>
          <h2>Contact</h2>
          <hr />
          <div className={styles.info}>
            <span>
              <a href={"mailto:contact@michelbusse.dev"}>
                contact@michelbusse.dev
              </a>
            </span>
            <div className={styles.icons}>
              <FaLinkedin />
              <div className={styles.spacer}></div>
              <FaGithub />
              <div className={styles.spacer}></div>
              <FaStackOverflow />
            </div>
          </div>
          <input type={"email"} placeholder="Your Email" required/>
          <textarea placeholder="Your Message" required/>
          <button>Submit</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
