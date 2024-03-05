import { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

export default function TextPage(props : PropsWithChildren){
    return <main className={styles.main}>
        {props.children}
    </main>
}