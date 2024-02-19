import Image from "next/image";
import styles from "../project.module.scss";
import listStyles from "../../TechnologiesList.module.scss";
import { FaGithub, FaAppStoreIos } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import Link from "next/link";

export default function SocialNetworkAppClubz() {
  return (
    <main className={styles.main}>
      <div className={styles.row}>
        <div className={styles.cell}>
          <h1>Social Network App</h1>
          <div className={styles.subheadline}>Clubz</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam felis
            velit, finibus non erat ullamcorper, tempus ultricies elit. Praesent
            dui justo, lacinia ut dictum nec, sodales ac risus. Cras id libero
            vel dui efficitur pellentesque. Nulla sit amet ligula eget lectus
            suscipit fermentum sit amet id purus. Curabitur pellentesque
            accumsan enim et faucibus.
          </p>
        </div>
        <div className={styles.placeholder} id={"projectPlaceholder"}></div>
      </div>
      <div className={styles.row}>
        <div className={styles.cell}>
          <h2>Technologies</h2>
          <ul className={listStyles.technologiesList}>
            <li className={listStyles.technologyItem}>
              <div className={listStyles.technologyLogo}>
                <Image
                  src={"/images/technologies/flutter.svg"}
                  alt={"Flutter Logo"}
                  width={10}
                  height={10}
                />
              </div>
              Flutter (Dart)
            </li>
            <li className={listStyles.technologyItem}>
              <div className={listStyles.technologyLogo}>
                <Image
                  src={"/images/technologies/riverpod.svg"}
                  alt={"Riverpod Logo"}
                  width={10}
                  height={10}
                />
              </div>
              Riverpod
            </li>
            <li className={listStyles.technologyItem}>
              <div className={listStyles.technologyLogo}>
                <Image
                  src={"/images/technologies/supabase.png"}
                  alt={"Supabase Logo"}
                  width={10}
                  height={10}
                />
              </div>
              Supabase
            </li>
            <li className={listStyles.technologyItem}>
              <div className={listStyles.technologyLogo}>
                <Image
                  src={"/images/technologies/onesignal.svg"}
                  alt={"OneSignal Logo"}
                  width={10}
                  height={10}
                />
              </div>
              OneSignal
            </li>
          </ul>
        </div>
        <div className={styles.cell}>
          <h2>Challenges</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam felis
            velit, finibus non erat ullamcorper, tempus ultricies elit. Praesent
            dui justo, lacinia ut dictum nec, sodales ac risus. Cras id libero
            vel dui efficitur pellentesque. Nulla sit amet ligula eget lectus
            suscipit fermentum sit amet id purus. Curabitur pellentesque
            accumsan enim et faucibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam felis
            velit, finibus non erat ullamcorper, tempus ultricies elit. Praesent
            dui justo, lacinia ut dictum nec, sodales ac risus. Cras id libero
            vel dui efficitur pellentesque. Nulla sit amet ligula eget lectus
            suscipit fermentum sit amet id purus. Curabitur pellentesque
            accumsan enim et faucibus.
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.cell}>
          <h2>Results</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam felis
            velit, finibus non erat ullamcorper, tempus ultricies elit. Praesent
            dui justo, lacinia ut dictum nec, sodales ac risus. Cras id libero
            vel dui efficitur pellentesque. Nulla sit amet ligula eget lectus
            suscipit fermentum sit amet id purus. Curabitur pellentesque
            accumsan enim et faucibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam felis
            velit, finibus non erat ullamcorper, tempus ultricies elit. Praesent
            dui justo, lacinia ut dictum nec, sodales ac risus. Cras id libero
            vel dui efficitur pellentesque. Nulla sit amet ligula eget lectus
            suscipit fermentum sit amet id purus. Curabitur pellentesque
            accumsan enim et faucibus.
          </p>
        </div>
        <div className={styles.cell}>
          <h2>Links</h2>
          <ul className={styles.linksList}>
            <Link href={"https://github.com/MichelBusse/clubz"} target={"_blank"}>
              <li>
                <div className={styles.linkLogo}>
                  <FaGithub />
                </div>
              </li>
            </Link>
            <Link href={"https://apps.apple.com/en/app/clubz/id6444685917"} target={"_blank"}>
              <li>
                <div className={styles.linkLogo}>
                  <FaAppStoreIos />
                </div>
              </li>
            </Link>
            <Link href={"https://play.google.com/store/apps/details?id=com.m_to_b.clubz"} target={"_blank"}>
              <li>
                <div className={styles.linkLogo}>
                  <IoLogoGooglePlaystore />
                </div>
              </li>
            </Link>
          </ul>
          <p>
            Check out the source code on GitHub or the live version on Google
            Play and App Store.
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.cell}>
          <h2>Images</h2>
          <div className={styles.images}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/projects/social-network-app-clubz/1.png"
                alt="Feed Page with Filter"
                width={200}
                height={200}
              />
              <div className={styles.caption}>Feed Page with Filter</div>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/projects/social-network-app-clubz/2.png"
                alt="Profile Page"
                width={200}
                height={200}
              />
              <div className={styles.caption}>Profile Page</div>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/projects/social-network-app-clubz/3.png"
                alt="Create Events"
                width={200}
                height={200}
              />
              <div className={styles.caption}>Create Events</div>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/projects/social-network-app-clubz/4.png"
                alt="View Event Details"
                width={200}
                height={200}
              />
              <div className={styles.caption}>View Event Details</div>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/projects/social-network-app-clubz/5.png"
                alt="Search Profiles"
                width={200}
                height={200}
              />
              <div className={styles.caption}>Search Profiles</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
