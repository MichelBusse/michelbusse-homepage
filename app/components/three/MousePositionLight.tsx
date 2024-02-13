import { useEffect, useRef } from "react";
import { PerspectiveCamera, PointLight } from "three";

type Props = {
  cameraRef: React.RefObject<PerspectiveCamera>;
};

const MousePositionLight = ({ cameraRef }: Props) => {
  const lightRef = useRef<PointLight>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;

      if (lightRef.current != null && cameraRef.current != null) {
        lightRef.current?.position.set(
          x * window.innerWidth * 0.009,
          y * window.innerHeight * -0.009 + cameraRef.current.position.y,
          1
        );
      }
    };
    
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cameraRef]);

  return (
    <>
      <pointLight ref={lightRef} position={[0, 0, 5]} intensity={8} distance={1.5}/>
    </>
  );
};

export default MousePositionLight;
