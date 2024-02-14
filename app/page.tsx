import styles from "./page.module.scss";

import Header from "./components/Header";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Portfolio from "./components/Portfolio";
import Career from "./components/Career";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <About />
      <Technologies />
      <Portfolio />
      <Career />
      <Contact />
    </main>
  );
}
