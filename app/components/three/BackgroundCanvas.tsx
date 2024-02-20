"use client";

import { Canvas } from "@react-three/fiber";
import styles from "./BackgroundCanvas.module.scss";
import BackgroundSphere from "./BackgroundSphere";
import { PerspectiveCamera } from "three";
import { useEffect, useRef, useState } from "react";
import CustomCamera from "./CustomCamera";
import Cubes from "./Cubes";
import MousePositionLight from "./MousePositionLight";
import ScrollAlong from "./ScrollAlong";

function BackgroundCanvas() {
  const cameraRef = useRef<PerspectiveCamera>(null);
  const [canvasHeight, setCanvasHeight] = useState(0);

  useEffect(() => {
    const refreshCanvasHeight = () => {
      setCanvasHeight(window.outerHeight);
    };

    refreshCanvasHeight();

    window.addEventListener("resize", refreshCanvasHeight);

    return () => {
      window.removeEventListener("resize", refreshCanvasHeight);
    };
  }, []);

  return (
    <div
      className={styles.wrapper}
      id="canvasWrapper"
      style={{ height: canvasHeight }}
    >
      <Canvas>
        <ambientLight args={[0xffffff, 0.5]} />
        <CustomCamera cameraRef={cameraRef} />
        <BackgroundSphere />
        <MousePositionLight />
        <ScrollAlong>
          <Cubes />
        </ScrollAlong>
      </Canvas>
    </div>
  );
}

export default BackgroundCanvas;
