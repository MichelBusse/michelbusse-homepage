import { useEffect, useRef } from "react";
import { PerspectiveCamera, PointLight } from "three";

type Props = {
  cameraRef: React.RefObject<PerspectiveCamera>;
};

const MousePositionLight = ({ cameraRef }: Props) => {
  const lightRef = useRef<PointLight>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const canvasWrapper = document.getElementById("canvasWrapper");
      if(canvasWrapper == null){
        return;
      }
  
      const windowWidth = canvasWrapper.clientWidth;
      const windowHeight = canvasWrapper.clientHeight;

      const x = event.clientX / windowWidth - 0.5;
      const y = event.clientY / windowHeight - 0.5;

      if (lightRef.current != null && cameraRef.current != null) {
        lightRef.current?.position.set(
          x * windowWidth * 0.009,
          y * windowHeight * -0.009 + cameraRef.current.position.y,
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
