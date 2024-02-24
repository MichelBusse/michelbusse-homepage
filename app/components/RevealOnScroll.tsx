"use client";
import { PropsWithChildren, useEffect, useRef } from "react";

type Props = {
  className?: string;
  visibleClassName?: string;
};

const RevealOnScroll = (props: PropsWithChildren<Props>) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!divRef.current || !props.visibleClassName) {
        return;
      }

      if (
        divRef.current.getBoundingClientRect().top <
        window.innerHeight * 0.9
      ) {
        divRef.current.classList.add(props.visibleClassName);
      } else {
        divRef.current.classList.remove(props.visibleClassName);
      }
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [props.visibleClassName]);

  return (
    <div className={`${props.className}`} ref={divRef}>
      {props.children}
    </div>
  );
};

export default RevealOnScroll;
