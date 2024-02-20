import { useFrame } from "@react-three/fiber";
import { Color, DoubleSide, Mesh } from "three";
import { useRef } from "react";

const BackgroundSphere = () => {
  const backgroundSphere = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    backgroundSphere.current?.rotation.set(
      clock.elapsedTime * 0.01 + 20,
      clock.elapsedTime * 0.005,
      clock.elapsedTime * 0.005 + 100,
    );
  });

  return (
    <mesh ref={backgroundSphere}>
      <sphereGeometry args={[10, 50, 50]} />
      <meshBasicMaterial side={DoubleSide} wireframe color={new Color( 0x444444 )} />
    </mesh>
  );
};

export default BackgroundSphere;
