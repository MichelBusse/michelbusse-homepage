"use client";

import { useGLTF } from "@react-three/drei";
import { forwardRef } from "react";
import { Euler, Group, Mesh, Vector3 } from "three";
import CubeText from "./CubeText";

type Props = {
  letterAbout: string;
  letterPortfolio: string;
};

const Cube = forwardRef<Group, Props>((props, ref) => {
  const { nodes } = useGLTF("/models/cube.glb");

  return (
    <group ref={ref}>
      <mesh geometry={(nodes.Cube as Mesh).geometry}>
        <meshStandardMaterial color={0xffffff} />
      </mesh>
      <CubeText
        text={props.letterAbout}
        position={new Vector3(0, 0.501, 0)}
        rotation={new Euler(0.5 * Math.PI, 0, Math.PI)}
        scale={new Vector3(-1, 1, 1)}
        color={0x999999}
      />
      <CubeText
        text={props.letterPortfolio}
        position={new Vector3(0, -0.501, 0)}
        rotation={new Euler(1.5 * Math.PI, 0, Math.PI)}
        scale={new Vector3(-1, 1, 1)}
        color={0x999999}
      />
    </group>
  );
});

Cube.displayName = "Cube";

export default Cube;

useGLTF.preload("/models/cube.glb");
