import styles from "./HeadlinePlaceholder.module.scss";

type Props = {
  id : string;
}

const HeadlinePlaceholder = ({id} : Props) => {
  return (
    <section
      id={id}
      className={styles.headlinePlaceholder}
    ></section>
  );
};

export default HeadlinePlaceholder;
