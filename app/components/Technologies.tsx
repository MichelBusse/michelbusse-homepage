import styles from "./Technologies.module.scss";
import Image from "next/image";

const Technologies = () => {
  return (
    <section id={"technologies"} className={styles.technologies}>
      <div className={styles.gridWrapper}>
        <div className={styles.gridColumn}>
          <div className={styles.boxWrapper}>
            <div className={styles.box}>
              <h3>VR / AR</h3>
              <ul>
                <li><div className={styles.logo}><Image src={"/images/technologies/unity.png"} alt={"Unity Logo"} width={10} height={10}/></div>Unity</li>
                <li><div className={styles.logo}><Image src={"/images/technologies/mrtk.png"} alt={"MRTK Logo"} width={10} height={10}/></div>MRTK</li>
                <li><div className={styles.logo}><Image src={"/images/technologies/realitykit.png"} alt={"RealityKit Logo"} width={10} height={10}/></div>RealityKit</li>
                <li><div className={styles.logo}><Image src={"/images/technologies/opencv.png"} alt={"OpenCV Logo"} width={10} height={10}/></div>OpenCV</li>
              </ul>
            </div>
          </div>
          <div className={styles.boxWrapper}>
            <div className={styles.box}>
              <h3>Web</h3>
              <ul>
                <li><div className={styles.logo}><Image src={"/images/technologies/reactjs.png"} alt={"ReactJS Logo"} width={10} height={10}/></div>ReactJS</li>
                <li><div className={styles.logo}><Image src={"/images/technologies/nextjs.svg"} alt={"NextJS Logo"} width={10} height={10}/></div>NextJS</li>
                <li><div className={styles.logo}><Image src={"/images/technologies/vite.png"} alt={"Vite Logo"} width={10} height={10}/></div>Vite</li>
                <li><div className={styles.logo}><Image src={"/images/technologies/threejs.png"} alt={"ThreeJS Logo"} width={10} height={10}/></div>ThreeJS</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.gridColumn}>
          <div className={styles.boxWrapper}>
            <div className={styles.box}>
              <h3>Backend / Data</h3>
              <ul>
                <li><div className={styles.logo}><Image src={"/images/technologies/firebase.png"} alt={"Firebase Logo"} width={10} height={10}/></div>Firebase</li>
                <li><div className={styles.logo}><Image src={"/images/technologies/supabase.png"} alt={"Supabase Logo"} width={10} height={10}/></div>Supabase</li>
                <li><div className={styles.logo}><Image src={"/images/technologies/nest.svg"} alt={"NestJS Logo"} width={10} height={10}/></div>NestJS</li>
                <li><div className={styles.logo}><Image src={"/images/technologies/postgresql.png"} alt={"PostgreSQL Logo"} width={10} height={10}/></div>PostgreSQL</li>
                <li><div className={styles.logo}><Image src={"/images/technologies/mongodb.svg"} alt={"MongoDB Logo"} width={10} height={10}/></div>MongoDB</li>
                <li><div className={styles.logo}><Image src={"/images/technologies/nodejs.png"} alt={"NodeJS Logo"} width={10} height={10}/></div>NodeJS</li>
                <li><div className={styles.logo}><Image src={"/images/technologies/java.png"} alt={"Java Logo"} width={10} height={10}/></div>Java</li>
                <li><div className={styles.logo}><Image src={"/images/technologies/python.png"} alt={"Python Logo"} width={10} height={10}/></div>Python</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.gridColumn}>
          <div className={styles.boxWrapper}>
            <div className={styles.box}>
              <h3>Mobile</h3>
              <ul>
                <li><div className={styles.logo}><Image src={"/images/technologies/flutter.svg"} alt={"Flutter Logo"} width={10} height={10}/></div>Flutter (Dart)</li>
                <li><div className={styles.logo}><Image src={"/images/technologies/ios.png"} alt={"IOS Logo"} width={10} height={10}/></div>Native IOS (Swift)</li>
                <li><div className={styles.logo}><Image src={"/images/technologies/android.svg"} alt={"Android Logo"} width={10} height={10}/></div>Native Android (Kotlin)</li>
              </ul>
            </div>
          </div>
          <div className={styles.boxWrapper}>
            <div className={styles.box}>
              <h3>Miscellaneous</h3>
              <ul>
                <li><div className={styles.logo}><Image src={"/images/technologies/git.png"} alt={"Git Logo"} width={10} height={10}/></div>Git</li>
                <li><div className={styles.logo}><Image src={"/images/technologies/docker.png"} alt={"Docker Logo"} width={10} height={10}/></div>Docker</li>
                <li><div className={styles.logo}><Image src={"/images/technologies/aws.png"} alt={"AWS Logo"} width={10} height={10}/></div>AWS</li>
                <li><div className={styles.logo}><Image src={"/images/technologies/linux.png"} alt={"Linux Logo"} width={10} height={10}/></div>Linux Server</li>
                <li><div className={styles.logo}><Image src={"/images/technologies/scrum.png"} alt={"Scrum Logo"} width={10} height={10}/></div>Scrum</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
