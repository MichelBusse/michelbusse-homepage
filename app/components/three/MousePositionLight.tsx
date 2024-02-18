import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { PerspectiveCamera, PointLight, Vector3 } from "three";

const MousePositionLight = () => {
  const lightRef = useRef<PointLight>(null);
  const targetPos = useRef<Vector3>();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const canvasWrapper = document.getElementById("canvasWrapper");
      if (canvasWrapper == null) {
        return;
      }

      const windowWidth = canvasWrapper.clientWidth;
      const windowHeight = canvasWrapper.clientHeight;

      const x = event.clientX / windowWidth - 0.5;
      const y = event.clientY / windowHeight - 0.5;

      targetPos.current = new Vector3(
        ((x * windowWidth) / windowHeight) * 7,
        y * windowHeight * -0.009,
        1
      );
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame((state) => {
    if (lightRef.current != null && targetPos.current != null) {
      lightRef.current?.position.lerp(new Vector3(
        targetPos.current.x,
        targetPos.current.y + state.camera.position.y,
        targetPos.current.z,
      ), 0.3);
    }
  });

  return (
    <>
      <pointLight
        ref={lightRef}
        position={[0, 0, 5]}
        intensity={8}
        distance={1.5}
      />
    </>
  );
};

export default MousePositionLight;
