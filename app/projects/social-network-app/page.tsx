import Image from "next/image";
import styles from "../project.module.scss";
import listStyles from "../../TechnologiesList.module.scss";
import { FaGithub, FaAppStoreIos } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import Link from "next/link";
import TypeWriter from "@/app/components/TypeWriter";
import ProjectImagesCell from "@/app/components/ProjectImagesCell";

export default function SocialNetworkAppClubz() {
  return (
    <main className={styles.main}>
      <div className={styles.row}>
        <div className={styles.cell}>
          <h1>
            <TypeWriter
              typewriterKey="social-network-app"
              autoStart={true}
            >
              Social Network App
            </TypeWriter>
          </h1>
          <div className={styles.subheadline}>Clubz</div>
          <p>
            The idea for Clubz arose from the personal need for one place to
            look up local parties and plan the upcoming weekends with our
            friends.
          </p>
          <p>
            The solution was a social network for events, where users can view
            what their friends are up to, discover and share parties and manage
            their own.
          </p>
          <p>
            Simultaneously, club owners should have the opportunity to
            efficiently manage and promote their parties to a local audience,
            since there is no other current alternative to efficiently market
            events.
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
            When developing the social network app, it was crucial to keep the
            UX design intuitive and efficient for new users, besides the need to
            support both, personal and business users. A well guarded security
            and permission system had to be set up to keep private user data
            private. This could be achieved with row level security policies in
            Supabases database system PostgreSQL. This system also made the
            implementation of queries with the necessary complexity and
            localization features possible.
          </p>
          <p>
            Furthermore, many APIs and services had to be connected
            and interlinked, to support all the apps features, like push
            notifications, Google Places and Facebook or Apple sign up. Finally,
            the whole app had to be optimized and reiterated multiple times, to
            align with all policies of Google and Apple to get approval on both
            stores.
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.cell}>
          <h2>Results</h2>
          <p>
            Clubz became a scalable full-stack app, which is now live on the App
            Store, Google Play and web. The app allows for an intuitive creation
            of profiles and events. Various functionalities make the app a truly
            social network for its users, like following their friends, sharing
            events with them, uploading pictures and maintaining a diary of
            their own past events.
          </p>
          <p>
            Clubz allows for an easy discovery of local happenings and an
            overview of every important information at a glance. This means a
            huge advantage for both, personal and business users. Extensive
            features for professional hosts offer them further options to
            manage, promote and plan their events ahead.
          </p>
          <p>
            In summary, Clubz is able to solve the initial problem and now is at
            the beginning of building a local community
          </p>
        </div>
        <div className={styles.cell}>
          <h2>Links</h2>
          <ul className={styles.linksList}>
            <Link
              href={"https://github.com/MichelBusse/clubz"}
              target={"_blank"}
            >
              <li>
                <div className={styles.linkLogo}>
                  <FaGithub />
                </div>
              </li>
            </Link>
            <Link
              href={"https://apps.apple.com/en/app/clubz/id6444685917"}
              target={"_blank"}
            >
              <li>
                <div className={styles.linkLogo}>
                  <FaAppStoreIos />
                </div>
              </li>
            </Link>
            <Link
              href={
                "https://play.google.com/store/apps/details?id=com.m_to_b.clubz"
              }
              target={"_blank"}
            >
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
        <ProjectImagesCell
          images={[
            "/images/projects/social-network-app/1.png",
            "/images/projects/social-network-app/2.png",
            "/images/projects/social-network-app/3.png",
            "/images/projects/social-network-app/4.png",
            "/images/projects/social-network-app/5.png",
            "/images/projects/social-network-app/6.png",
            "/images/projects/social-network-app/7.png",
            "/images/projects/social-network-app/8.png",
            "/images/projects/social-network-app/9.png",
            "/images/projects/social-network-app/10.png",
          ]}
          captions={[
            "Feed Page with Filter",
            "Profile Page",
            "Create Events",
            "View Event Details",
            "Search Profiles",
            "View Followers",
            "Edit Profile Settings",
            "Filter for Feed Page",
            "Pick Location with Google Places",
            "Profile Page",
          ]}
        />
      </div>
    </main>
  );
}
