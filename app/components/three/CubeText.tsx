import React from "react";
import {
  ColorRepresentation,
  Euler,
  Mesh,
  MeshStandardMaterial,
  Vector3,
} from "three";
import { FontLoader, TextGeometry } from "three/examples/jsm/Addons.js";
import robotoFont from "../../lib/fonts/Roboto-Regular.json";

type Props = {
  text: string;
  position: Vector3;
  scale: Vector3;
  rotation: Euler;
  color: ColorRepresentation;
  visible: boolean;
};

function CubeText(props: Props) {
  const fontLoader = new FontLoader();
  const font = fontLoader.parse(robotoFont);

  const textOptions = {
    font: font,
    size: 0.3,
    height: 0.001,
  };

  const textGeometry = new TextGeometry(props.text, textOptions);

  const material = new MeshStandardMaterial({ color: props.color });
  const textMesh = new Mesh(textGeometry, material);

  textGeometry.center();

  return (
    <>
      {props.visible && (
        <primitive
          object={textMesh}
          position={props.position}
          rotation={props.rotation}
          scale={props.scale}
        />
      )}
    </>
  );
}

export default CubeText;
