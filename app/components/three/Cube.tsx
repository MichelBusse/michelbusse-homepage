"use client";

import { useGLTF } from "@react-three/drei";
import { RefObject, forwardRef, useRef, useState } from "react";
import { Euler, Group, Mesh, Vector3 } from "three";
import CubeText from "./CubeText";
import { useFrame } from "@react-three/fiber";

type Props = {
  section: RefObject<number>;
  letterAbout: string;
  letterPortfolio: string;
  letterCareer: string;
};

const Cube = forwardRef<Group, Props>((props, ref) => {
  const { nodes } = useGLTF("/models/cube.glb");
  const [currentSection, setCurrentSection] = useState(0);

  useFrame(() => {
    if(props.section.current != null && props.section.current != currentSection){
      setCurrentSection(props.section.current);
    }
  })

  console.log(currentSection)

  return (
    <group ref={ref}>
      <mesh geometry={(nodes.Cube as Mesh).geometry}>
        <meshStandardMaterial color={0xffffff} />
      </mesh>
      <CubeText
        visible={currentSection == 1}
        text={props.letterAbout}
        position={new Vector3(0, 0, -0.501)}
        rotation={new Euler(1 * Math.PI, 0, 0)}
        scale={new Vector3(1, 1, 1)}
        color={0xbbbbbb}
      />
      <CubeText
        visible={currentSection == 2}
        text={props.letterPortfolio}
        position={new Vector3(0, 0, 0.501)}
        rotation={new Euler(1 * Math.PI, 1 * Math.PI, 1 * Math.PI)}
        scale={new Vector3(1, 1, 1)}
        color={0xbbbbbb}
      />
      <CubeText
        visible={currentSection == 3}
        text={props.letterCareer}
        position={new Vector3(0, 0, -0.501)}
        rotation={new Euler(1 * Math.PI, 0, 0)}
        scale={new Vector3(1, 1, 1)}
        color={0xbbbbbb}
      />
    </group>
  );
});

Cube.displayName = "Cube";

export default Cube;

useGLTF.preload("/models/cube.glb");
