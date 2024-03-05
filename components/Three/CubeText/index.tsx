import React, { RefObject, useRef } from "react";
import {
  Euler,
  Mesh,
  MeshLambertMaterial,
  Vector3,
} from "three";
import { Font, TextGeometry } from "three/examples/jsm/Addons.js";
import { PrimitiveProps, useFrame } from "@react-three/fiber";

type Props = {
  section: RefObject<number>;
  visibleSection: number;
  text: string;
  position: Vector3;
  scale: Vector3;
  rotation: Euler;
  material: MeshLambertMaterial;
  font: Font
};

function CubeText(props: Props) {
  const meshRef = useRef<PrimitiveProps>(null);

  const textOptions = {
    font: props.font,
    size: 0.3,
    height: 0.001,
  };

  const textGeometry = new TextGeometry(props.text, textOptions);

  const textMesh = new Mesh(textGeometry, props.material);

  textGeometry.center();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current!.visible = props.section.current == props.visibleSection;
    }
  });

  return (
    <primitive
      ref={meshRef}
      object={textMesh}
      position={props.position}
      rotation={props.rotation}
      scale={props.scale}
    />
  );
}

export default CubeText;
