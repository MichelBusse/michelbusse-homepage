import { SectionRefsProps } from "../page";
import styles from "./WaveAnimationPlaceholder.module.scss";
  
const WaveAnimationPlaceholder = ({sectionRefs} : SectionRefsProps) => {
    return <section className={styles.waveAnimationPlaceholder} ref={sectionRefs.waveAnimationPlaceholderRef}></section>
}

export default WaveAnimationPlaceholder;