"use client";

import { PropsWithChildren, useEffect, useRef } from "react";
import Typed, { TypedOptions } from "typed.js";
import styles from "./TypeWriter.module.scss";

type Props = {
  typewriterKey: string;
};

const TypeWriter = (props: PropsWithChildren<Props>) => {
  const typed = useRef<Typed | undefined>();

  // Create reference to store the DOM element containing the animation
  const el = useRef<HTMLElement>(null);

  useEffect(() => {
    const options: TypedOptions = {
      stringsElement: "#typed-strings" + props.typewriterKey,
      typeSpeed: 90,
      showCursor: false,
    };

    if (el.current) {
      typed.current = new Typed(el.current, options);
      typed.current?.stop();
    }

    const onScroll = () => {
      if (el.current) {
        if (window.outerHeight * 0.65 > el.current.getBoundingClientRect().top) {
          typed.current?.start();
        }else if(window.outerHeight < el.current.getBoundingClientRect().top){
          typed.current?.stop();
          typed.current?.reset();
        }
      }
    };

    onScroll();

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);

      if (typed.current != undefined) {
        typed.current.destroy();
      }
    };
  }, [props.typewriterKey]);

  return (
    <>
      <span
        style={{ display: "inline" }}
        id={"typed-strings" + props.typewriterKey}
      >
        <span>{props.children}</span>
      </span>
      <span style={{ whiteSpace: "pre-wrap" }} ref={el} />
      <span className={styles.cursor}>|</span>
    </>
  );
};

export default TypeWriter;
