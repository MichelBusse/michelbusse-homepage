"use client";

import { RefObject, forwardRef, useState } from "react";
import { Euler, Group, Mesh, Object3D, Object3DEventMap, Vector3 } from "three";
import CubeText from "./CubeText";
import { useFrame } from "@react-three/fiber";
import CubeImage from "./CubeImage";

type Props = {
  mesh: Mesh;
  section: RefObject<number>;
  imageUrl: string;
  letterAbout: string;
  letterPortfolio: string;
  letterCareer: string;
  letterContact: string;
};

const Cube = forwardRef<Group, Props>((props, ref) => {
  const [currentSection, setCurrentSection] = useState(0);

  useFrame(() => {
    if (
      props.section.current != null &&
      props.section.current != currentSection
    ) {
      setCurrentSection(props.section.current);
    }
  });

  return (
    <group ref={ref}>
      <mesh geometry={props.mesh.geometry}>
        <meshStandardMaterial color={0xffffff} />
      </mesh>
      <CubeImage
        visible={currentSection == 0}
        imageUrl={props.imageUrl}
        position={new Vector3(0, 0, 0.501)}
        rotation={new Euler(1 * Math.PI, 1 * Math.PI, 1 * Math.PI)}
        scale={new Vector3(0.7, 0.7, 0.7)}
      />
      <CubeText
        visible={currentSection == 1}
        text={props.letterAbout}
        position={new Vector3(0, 0, -0.501)}
        rotation={new Euler(1 * Math.PI, 0, 0)}
        scale={new Vector3(1, 1, 1)}
        color={0x888888}
      />
      <CubeText
        visible={currentSection == 2}
        text={props.letterPortfolio}
        position={new Vector3(0, 0, 0.501)}
        rotation={new Euler(1 * Math.PI, 1 * Math.PI, 1 * Math.PI)}
        scale={new Vector3(1, 1, 1)}
        color={0x888888}
      />
      <CubeText
        visible={currentSection == 3}
        text={props.letterCareer}
        position={new Vector3(0, 0, -0.501)}
        rotation={new Euler(1 * Math.PI, 0, 0)}
        scale={new Vector3(1, 1, 1)}
        color={0x888888}
      />
      <CubeText
        visible={currentSection == 4}
        text={props.letterContact}
        position={new Vector3(0, 0, 0.501)}
        rotation={new Euler(1 * Math.PI, 1 * Math.PI, 1 * Math.PI)}
        scale={new Vector3(1, 1, 1)}
        color={0x888888}
      />
    </group>
  );
});

Cube.displayName = "Cube";

export default Cube;
