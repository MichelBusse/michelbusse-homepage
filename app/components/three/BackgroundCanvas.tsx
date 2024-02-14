"use client";

import { Canvas } from "@react-three/fiber";
import styles from "./BackgroundCanvas.module.scss";
import BackgroundSphere from "./BackgroundSphere";
import { PerspectiveCamera } from "three";
import { useRef } from "react";
import CustomCamera from "./CustomCamera";
import Cubes from "./Cubes";
import MousePositionLight from "./MousePositionLight";

function BackgroundCanvas() {
  const cameraRef = useRef<PerspectiveCamera>(null);

  return (
    <div className={styles.wrapper} id="canvasWrapper">
      <Canvas>
        <ambientLight args={[0xffffff, 0.5]} />
        <CustomCamera cameraRef={cameraRef} />
        <BackgroundSphere />
        <MousePositionLight cameraRef={cameraRef} />
        <Cubes/>
      </Canvas>
    </div>
  );
}

export default BackgroundCanvas;
