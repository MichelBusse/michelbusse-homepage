import { useEffect, useRef } from "react";

import styles from "./MouseCircle.module.scss";

const MouseCircle = () => {
  const mouseCircle = useRef<HTMLDivElement>(null);

  const positionRef = useRef({
    mouseX: -1,
    mouseY: -1,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      positionRef.current.mouseX = clientX;
      positionRef.current.mouseY = clientY;
    };

    document.addEventListener("mousemove", mouseMove);

    return () => {
      document.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);

      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;

      // Cancel if no mouse position is yet determined
      if(mouseX == -1 || mouseY == -1){
        return;
      }

      if (!destinationX && !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        const distanceX = (mouseX - destinationX) * 0.4;
        const distanceY = (mouseY - destinationY) * 0.4;

        if (Math.abs(distanceX) + Math.abs(distanceY) < 0.1) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX * 0.2;
          positionRef.current.destinationY += distanceY * 0.2;
        }
      }

      if (mouseCircle.current != null) {
        mouseCircle.current!.style.left =
          positionRef.current.destinationX + "px";

        mouseCircle.current!.style.top =
          positionRef.current.destinationY + "px";
      }
    };

    followMouse();
  }, []);

  return (
    <div className={styles.mouseCircleWrapper}>
      <div className={styles.mouseCircle} ref={mouseCircle}></div>
    </div>
  );
};

export default MouseCircle;
