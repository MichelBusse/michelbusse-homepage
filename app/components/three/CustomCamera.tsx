import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { DirectionalLight, PerspectiveCamera } from "three";

type Props = {
  cameraRef: React.RefObject<PerspectiveCamera>;
};

const CustomCamera = ({ cameraRef }: Props) => {
  const directionalLightRef = useRef<DirectionalLight>(null);
  const { set } = useThree();

  useEffect(() => {
    // Set default camera and parameters
    if (cameraRef.current != null) {
      void set({ camera: cameraRef.current! });
      cameraRef.current.aspect = window.innerWidth / window.innerHeight
      cameraRef.current.updateProjectionMatrix();
    }
  }, [cameraRef, set]);

  useFrame((state) => {
    // Update camera according to scroll position
    state.camera.position.y = -window.scrollY / (window.innerHeight / 7);
    directionalLightRef.current &&
      (directionalLightRef.current.position.y =
        -window.scrollY / (window.innerHeight / 6));
  });

  return (
    <>
      <perspectiveCamera
        ref={cameraRef}
        fov={75}
        near={0.1}
        far={1000}
        position={[0, 0, 5]}
      />
      <directionalLight ref={directionalLightRef} position={[0, 0, 100]} />
    </>
  );
};

export default CustomCamera;