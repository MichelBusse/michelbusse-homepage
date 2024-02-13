import styles from "./About.module.scss";
import circleSectionStyle from "./CircleSection.module.scss";

const About = () => {
  return (
    <section id="about" className={circleSectionStyle.circleSection}>
      <div className={circleSectionStyle.placeholder}>
      </div>
      <div className={circleSectionStyle.textWrapper}>
        <div className={styles.text}>
          <h2>About me</h2>
          <hr />
          <p>
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra.|
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
