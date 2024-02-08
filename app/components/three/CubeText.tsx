import React from "react";
import { ColorRepresentation, Euler, Mesh, MeshBasicMaterial, Vector3 } from "three";
import { FontLoader, GeometryUtils, TextGeometry } from "three/examples/jsm/Addons.js";
import robotoFont from "../../lib/fonts/Roboto-Regular.json";

type Props = {
    text: string,
    position: Vector3,
    scale: Vector3,
    rotation: Euler,
    color: ColorRepresentation,
}

function CubeText(props: Props) {
  const fontLoader = new FontLoader();
  const font = fontLoader.parse(robotoFont);

  const textOptions = {
    font: font,
    size: 0.5,
    height: 0.01,
  };

  const textGeometry = new TextGeometry(
    props.text,
    textOptions
  );

  const material = new MeshBasicMaterial({ color: props.color });
  const textMesh = new Mesh(textGeometry, material);

  textGeometry.center()

  return <primitive object={textMesh} position={props.position} rotation={props.rotation} scale={props.scale} />;
}

export default CubeText;
