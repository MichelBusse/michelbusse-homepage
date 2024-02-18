import { useFrame } from "@react-three/fiber";
import { Color, DoubleSide, Mesh } from "three";
import { useRef } from "react";

const BackgroundSphere = () => {
  const backgroundSphere = useRef<Mesh>(null);

  useFrame(({ clock, camera }) => {
    backgroundSphere.current?.rotation.set(
      clock.elapsedTime * 0.01 + 20,
      clock.elapsedTime * 0.005,
      clock.elapsedTime * 0.005 + 100,
    );
    backgroundSphere.current?.position.set(camera.position.x, camera.position.y, camera.position.z);
  });

  return (
    <mesh ref={backgroundSphere}>
      <sphereGeometry args={[10, 50, 50]} />
      <meshBasicMaterial side={DoubleSide} wireframe color={new Color( 0x444444 )} />
    </mesh>
  );
};

export default BackgroundSphere;
