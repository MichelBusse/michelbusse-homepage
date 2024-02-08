"use client";

import styles from "./page.module.scss";

import Header from "./components/Header";
import About from "./components/About";
import Technologies from "./components/Technologies";
import WaveAnimationPlaceholder from "./components/WaveAnimationPlaceholder";
import Portfolio from "./components/Portfolio";
import { useRef } from "react";
import BackgroundCanvas from "./components/three/BackgroundCanvas";
import MouseCircle from "./components/MouseCircle";

export type SectionRefs = {
  headerRef: React.MutableRefObject<HTMLElement | null>;
  aboutRef: React.MutableRefObject<HTMLElement | null>;
  technologiesRef: React.MutableRefObject<HTMLElement | null>;
  waveAnimationPlaceholderRef: React.MutableRefObject<HTMLElement | null>;
};

export type SectionRefsProps = {
  sectionRefs: SectionRefs;
};

export default function Home() {
  const sectionRefs: SectionRefs = {
    headerRef: useRef(null),
    aboutRef: useRef(null),
    technologiesRef: useRef(null),
    waveAnimationPlaceholderRef: useRef(null),
  };

  return (
    <main className={styles.main}>
      <MouseCircle />
      <BackgroundCanvas sectionRefs={sectionRefs} />
      <Header sectionRefs={sectionRefs} />
      <About sectionRefs={sectionRefs} />
      <Technologies sectionRefs={sectionRefs} />
      <WaveAnimationPlaceholder sectionRefs={sectionRefs} />
      <Portfolio />
    </main>
  );
}
