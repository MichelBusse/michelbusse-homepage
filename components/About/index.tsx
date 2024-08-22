import CircleSection from "@/components/CircleSection";
import styles from "./styles.module.scss";
import TypeWriter from "@/components/TypeWriter";

const About = () => {
  return (
    <CircleSection id="about">
      <div className={styles.text}>
        <h2>
          <TypeWriter typewriterKey="about">About me</TypeWriter>
        </h2>
        <hr />
        <p>
          Hey there! I&apos;m Michel, a passionate developer from Saxony,
          Germany.
        </p>
        <p>
          My coding journey began when I was 14, and it&apos;s been an
          exhilarating ride ever since. In 2020, alongside starting my
          bachelor&apos;s degree, I founded my own software agency. Presenting
          and refining our systems at prestigious venues like UPMC Pittsburgh
          and Apple Park Cupertino only deepened my passion for technology.
        </p>
        <p>
          Currently, I&apos;m working as a Mobile App Engineer at a dynamic
          fitness and health app startup. Every day presents new challenges, and
          I thrive on finding creative solutions that make a real impact.
        </p>
        <p>
          I hope you enjoy browsing through my portfolio, and I look forward to
          hearing from you!
        </p>
      </div>
    </CircleSection>
  );
};

export default About;
