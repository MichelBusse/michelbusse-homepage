"use client";

import { RefObject, forwardRef } from "react";
import { BufferGeometry, Euler, Group, Material, MeshLambertMaterial, NormalBufferAttributes, Vector3 } from "three";
import CubeText from "./CubeText";
import CubeImage from "./CubeImage";
import { FontLoader } from "three/examples/jsm/Addons.js";
import robotoFont from "../../lib/fonts/Roboto-Regular.json";

type Props = {
  geometry: BufferGeometry<NormalBufferAttributes>;
  material: Material;
  section: RefObject<number>;
  imageUrl: string;
  letterAbout: string;
  letterPortfolio: string;
  letterCareer: string;
  letterContact: string;
};

const Cube = forwardRef<Group, Props>((props, ref) => {
  const fontLoader = new FontLoader();
  const font = fontLoader.parse(robotoFont);

  const material = new MeshLambertMaterial({ color: 0x888888 })

  return (
    <group ref={ref}>
      <mesh geometry={props.geometry} material={props.material}>
      </mesh>
      <CubeImage
        section={props.section}
        visibleSection={0}
        imageUrl={props.imageUrl}
        position={new Vector3(0, 0, 0.501)}
        rotation={new Euler(1 * Math.PI, 1 * Math.PI, 1 * Math.PI)}
        scale={new Vector3(0.7, 0.7, 0.7)}
      />
      <CubeText
        section={props.section}
        visibleSection={1}
        text={props.letterAbout}
        position={new Vector3(0, 0, -0.501)}
        rotation={new Euler(1 * Math.PI, 0, 0)}
        scale={new Vector3(1, 1, 1)}
        material={material}
        font={font}
      />
      <CubeText
        section={props.section}
        visibleSection={2}
        text={props.letterPortfolio}
        position={new Vector3(0, 0, 0.501)}
        rotation={new Euler(1 * Math.PI, 1 * Math.PI, 1 * Math.PI)}
        scale={new Vector3(1, 1, 1)}
        material={material}
        font={font}
      />
      <CubeText
        section={props.section}
        visibleSection={3}
        text={props.letterCareer}
        position={new Vector3(0, 0, -0.501)}
        rotation={new Euler(1 * Math.PI, 0, 0)}
        scale={new Vector3(1, 1, 1)}
        material={material}
        font={font}
      />
      <CubeText
        section={props.section}
        visibleSection={4}
        text={props.letterContact}
        position={new Vector3(0, 0, 0.501)}
        rotation={new Euler(1 * Math.PI, 1 * Math.PI, 1 * Math.PI)}
        scale={new Vector3(1, 1, 1)}
        material={material}
        font={font}
      />
    </group>
  );
});

Cube.displayName = "Cube";

export default Cube;
