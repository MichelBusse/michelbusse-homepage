import { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

export default function ProjectCell(props: PropsWithChildren){
    return <div className={styles.cell}>
        {props.children}
    </div>
}