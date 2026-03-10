import CircleSection from "@/components/CircleSection";
import styles from "./styles.module.scss";
import TypeWriter from "@/components/TypeWriter";

type Props = {
  content: {
    title: string;
    paragraphs: string[];
  };
};

const About = ({ content }: Props) => {
  return (
    <CircleSection id="about">
      <div className={styles.text}>
        <h2>
          <TypeWriter typewriterKey="about">{content.title}</TypeWriter>
        </h2>
        <hr />
        {content.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </CircleSection>
  );
};

export default About;
