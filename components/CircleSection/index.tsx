import { PropsWithChildren, ReactNode } from "react";
import styles from "./styles.module.scss";

type Props = {
  id: string;
};

const CircleSection = (props: PropsWithChildren<Props>) => {
  return (
    <section id={props.id} className={styles.circleSection}>
      <div
        className={styles.placeholder}
        id={props.id + "Placeholder"}
      ></div>
      <div className={styles.textWrapper}>{props.children}</div>
    </section>
  );
};

export default CircleSection;
