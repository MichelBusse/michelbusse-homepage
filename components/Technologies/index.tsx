import TechnologiesList from "@/components/TechnologiesList";
import styles from "./styles.module.scss";

const Technologies = () => {
  return (
    <section id={"technologies"} className={styles.technologies}>
      <div className={styles.gridWrapper}>
        <div className={styles.gridColumn}>
          <div className={styles.boxWrapper}>
            <div className={styles.box}>
              <h3>Web</h3>
              <TechnologiesList
                technologies={[
                  {
                    logoSrc: "/images/technologies/react.svg",
                    name: "React",
                  },
                  {
                    logoSrc: "/images/technologies/typescript.svg",
                    name: "TypeScript",
                  },
                  {
                    logoSrc: "/images/technologies/nextjs.svg",
                    name: "NextJS",
                  },
                  {
                    logoSrc: "/images/technologies/threejs.png",
                    name: "ThreeJS",
                  },
                ]}
              />
            </div>
          </div>
          <div className={styles.boxWrapper}>
            <div className={styles.box}>
              <h3>VR / AR</h3>
              <TechnologiesList
                technologies={[
                  {
                    logoSrc: "/images/technologies/unity.svg",
                    name: "Unity",
                  },
                  {
                    logoSrc: "/images/technologies/visionos.svg",
                    name: "visionOS",
                  },
                  {
                    logoSrc: "/images/technologies/mrtk.png",
                    name: "MRTK",
                  },
                  {
                    logoSrc: "/images/technologies/realitykit.png",
                    name: "RealityKit",
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div className={styles.gridColumn}>
          <div className={styles.boxWrapper}>
            <div className={styles.box}>
              <h3>Backend / Data</h3>
              <TechnologiesList
                technologies={[
                  {
                    logoSrc: "/images/technologies/nodejs.svg",
                    name: "NodeJS",
                  },
                  {
                    logoSrc: "/images/technologies/nest.svg",
                    name: "NestJS",
                  },
                  {
                    logoSrc: "/images/technologies/postgresql.png",
                    name: "PostgreSQL",
                  },
                  {
                    logoSrc: "/images/technologies/mongodb.svg",
                    name: "MongoDB",
                  },
                  {
                    logoSrc: "/images/technologies/redis.svg",
                    name: "Redis",
                  },
                  {
                    logoSrc: "/images/technologies/firebase.png",
                    name: "Firebase",
                  },
                  {
                    logoSrc: "/images/technologies/supabase.png",
                    name: "Supabase",
                  },
                  {
                    logoSrc: "/images/technologies/java.png",
                    name: "Java",
                  },
                  {
                    logoSrc: "/images/technologies/csharp.svg",
                    name: "C#",
                  },
                  {
                    logoSrc: "/images/technologies/python.png",
                    name: "Python",
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div className={styles.gridColumn}>
          <div className={styles.boxWrapper}>
            <div className={styles.box}>
              <h3>Mobile</h3>

              <TechnologiesList
                technologies={[
                  {
                    logoSrc: "/images/technologies/flutter.svg",
                    name: "Flutter",
                  },
                  {
                    logoSrc: "/images/technologies/ios.svg",
                    name: "iOS (Swift)",
                  },
                  {
                    logoSrc: "/images/technologies/android.svg",
                    name: "Android (Kotlin)",
                  },
                ]}
              />
            </div>
          </div>
          <div className={styles.boxWrapper}>
            <div className={styles.box}>
              <h3>Miscellaneous</h3>
              <TechnologiesList
                technologies={[
                  {
                    logoSrc: "/images/technologies/git.png",
                    name: "Git",
                  },
                  {
                    logoSrc: "/images/technologies/docker.png",
                    name: "Docker",
                  },
                  {
                    logoSrc: "/images/technologies/aws.png",
                    name: "AWS",
                  },
                  {
                    logoSrc: "/images/technologies/googlecloud.svg",
                    name: "Google Cloud",
                  },
                  {
                    logoSrc: "/images/technologies/linux.png",
                    name: "Linux",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
