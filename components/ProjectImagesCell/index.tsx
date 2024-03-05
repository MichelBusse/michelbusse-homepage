"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import ImageViewer from "react-simple-image-viewer";
import styles from "./styles.module.scss";
import ProjectCell from "../ProjectCell";

type Props = {
  images: string[];
  captions: string[];
};

export default function ProjectImagesCell(props: Props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <ProjectCell>
        <h2>Screenshots</h2>
        <div className={styles.images}>
          {props.images.map((image, index) => (
            <div
              className={styles.imageWrapper}
              onClick={() => openImageViewer(index)}
              key={index}
            >
              <Image
                src={image}
                alt={props.captions[index]}
                width={500}
                height={500}
              />
              <div className={styles.caption}>{props.captions[index]}</div>
            </div>
          ))}
        </div>
      </ProjectCell>
      {isViewerOpen && (
        <ImageViewer
          src={props.images}
          currentIndex={currentImage}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
          disableScroll
        />
      )}
    </>
  );
}
