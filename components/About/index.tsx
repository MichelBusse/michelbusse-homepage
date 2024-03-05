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
          I got into coding when I was 14, and I&apos;ve been on an exhilarating
          journey ever since. Alongside the start of my bachelor&apos;s degree
          in 2020, I founded my own software agency. Working alongside an
          incredible team, we&apos;ve tackled all sorts of projects, from
          intricate client demands to cutting-edge innovations. The thrill of
          presenting and refining those systems at places like UPMC Pittsburgh
          and Apple Park Cupertino has only fueled my excitement for more
          challenges and projects to sink into.
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
