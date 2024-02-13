import React from "react";
import {
  ColorRepresentation,
  Euler,
  TextureLoader,
  Vector3,
} from "three";
import { useLoader } from "@react-three/fiber";

type Props = {
  imageUrl: string;
  position: Vector3;
  scale: Vector3;
  rotation: Euler;
  color: ColorRepresentation;
  visible: boolean;
};

function CubeImage(props: Props) {
  const texture = useLoader(TextureLoader, props.imageUrl);

  return (
    <>
      {props.visible && (
        <mesh
          position={props.position}
          rotation={props.rotation}
          scale={props.scale}
        >
          <planeGeometry attach="geometry" args={[1, 1]} />
          <meshStandardMaterial attach="material" map={texture} transparent color={props.color}/>
        </mesh>
      )}
    </>
  );
}

export default CubeImage;
