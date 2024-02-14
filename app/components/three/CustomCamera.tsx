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
    const canvasWrapper = document.getElementById("canvasWrapper");
    if(canvasWrapper == null){
      return;
    }

    const windowWidth = canvasWrapper.clientWidth;
    const windowHeight = canvasWrapper.clientHeight;

    // Set default camera and parameters
    if (cameraRef.current != null) {
      void set({ camera: cameraRef.current! });
      cameraRef.current.aspect = windowWidth / windowHeight;
      cameraRef.current.updateProjectionMatrix();
    }
  }, [cameraRef, set]);

  useFrame((state) => {
    const canvasWrapper = document.getElementById("canvasWrapper");
    if(canvasWrapper == null){
      return;
    }
    const windowHeight = canvasWrapper.clientHeight;

    // Update camera according to scroll position
    state.camera.position.y = -window.scrollY / (windowHeight / 7);
    directionalLightRef.current &&
      (directionalLightRef.current.position.y =
        -window.scrollY / (windowHeight / 6));
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
