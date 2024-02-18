import React, { RefObject, useRef } from "react";
import {
  Euler,
  Mesh,
  MeshLambertMaterial,
  TextureLoader,
  Vector3,
} from "three";
import { useFrame, useLoader } from "@react-three/fiber";

type Props = {
  section: RefObject<number>;
  visibleSection: number;
  imageUrl: string;
  position: Vector3;
  scale: Vector3;
  rotation: Euler;
};

function CubeImage(props: Props) {
  const texture = useLoader(TextureLoader, props.imageUrl);
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if(meshRef.current != null){
      meshRef.current!.visible = props.section.current == props.visibleSection;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={props.position}
      rotation={props.rotation}
      scale={props.scale}
    >
      <planeGeometry attach="geometry" args={[1, 1]} />
      <meshLambertMaterial attach="material" map={texture} transparent />
    </mesh>
  );
}

export default CubeImage;
