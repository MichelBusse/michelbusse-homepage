"use client";

import Image from "next/image";
import styles from "../projects/project.module.scss";
import { useCallback, useEffect, useState } from "react";
import ImageViewer from "react-simple-image-viewer";

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
      <div className={styles.cell}>
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
      </div>
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
