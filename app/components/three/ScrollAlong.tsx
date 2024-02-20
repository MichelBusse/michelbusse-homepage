import { useFrame } from "@react-three/fiber";
import { Group, Vector3 } from "three";
import { PropsWithChildren, useRef } from "react";

const ScrollAlong = (props: PropsWithChildren) => {
  const groupRef = useRef<Group>(null);

  useFrame(() => {
    const canvasWrapper = document.getElementById("canvasWrapper");
    if (canvasWrapper == null) {
      return;
    }
    const windowHeight = canvasWrapper.clientHeight;

    groupRef.current?.position.lerp(
      new Vector3(0, window.scrollY / (windowHeight / 7), 0),
      0.5
    );
  });

  return (
    <group ref={groupRef}>
      {props.children}
    </group>
  );
};

export default ScrollAlong;
