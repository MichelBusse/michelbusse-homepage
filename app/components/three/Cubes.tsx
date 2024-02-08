"use client";

import { useFrame } from "@react-three/fiber";
import { Ref, useRef } from "react";
import { Group, Mesh, Quaternion, Vector3 } from "three";
import Cube from "./Cube";
import { SectionRefsProps } from "@/app/page";

const Cubes = ({ sectionRefs }: SectionRefsProps) => {
  // Create individual cubes.
  const cubes = [
    {
      ref: useRef<Group>(null),
      currentSection: 0,
      targetPosition: new Vector3(0, 0, 0),
      targetScale: new Vector3(1, 1, 1),
      targetRotation: new Quaternion(),
      letterAbout: "A",
      letterPortfolio: "W",
    },
    {
      ref: useRef<Group>(null),
      currentSection: 0,
      targetPosition: new Vector3(0, 0, 0),
      targetScale: new Vector3(1, 1, 1),
      targetRotation: new Quaternion(),
      letterAbout: "B",
      letterPortfolio: "O",
    },
    {
      ref: useRef<Group>(null),
      currentSection: 0,
      targetPosition: new Vector3(0, 0, 0),
      targetScale: new Vector3(1, 1, 1),
      targetRotation: new Quaternion(),
      letterAbout: "O",
      letterPortfolio: "R",
    },
    {
      ref: useRef<Group>(null),
      currentSection: 0,
      targetPosition: new Vector3(0, 0, 0),
      targetScale: new Vector3(1, 1, 1),
      targetRotation: new Quaternion(),
      letterAbout: "U",
      letterPortfolio: "K",
    },
    {
      ref: useRef<Group>(null),
      currentSection: 0,
      targetPosition: new Vector3(0, 0, 0),
      targetScale: new Vector3(1, 1, 1),
      targetRotation: new Quaternion(),
      letterAbout: "T",
      letterPortfolio: "S",
    },
  ];

  // Set initial values
  let prevCurrentSection = -1;
  let currentSection = -1;
  let sectionChangedTime = -10;

  // Call on every frame
  useFrame(({ clock }) => {
    // Check if section refs are not null
    if (
      sectionRefs.headerRef.current == null ||
      sectionRefs.aboutRef.current == null ||
      sectionRefs.technologiesRef.current == null ||
      sectionRefs.waveAnimationPlaceholderRef.current == null
    ) {
      return;
    }

    // Calculate relative horizontal size in 3D space in percent of the referenced elements width (100% is half of elements width)
    const getRelativeHorizontalSize = (
      ref: React.MutableRefObject<HTMLElement | null>,
      percent: number
    ) => {
      let elementWidth;

      if (ref.current == null) {
        elementWidth = 0;
      } else {
        elementWidth = ref.current!.getBoundingClientRect().width;
      }

      return (((percent / 100) * elementWidth) / window.innerHeight) * 3.5;
    };

    // Calculate relative horizontal position in 3D space in percent of the referenced elements width (0% is centered position)
    const getRelativeHorizontalPosition = (
      ref: React.MutableRefObject<HTMLElement | null>,
      percent: number
    ) => {
      let elementCenter;
      if (ref.current == null) {
        elementCenter = 0;
      } else {
        elementCenter =
          ((ref.current!.offsetLeft +
            ref.current!.getBoundingClientRect().width * 0.5 -
            window.innerWidth * 0.5) /
            window.innerWidth) *
          20;
      }

      return elementCenter + getRelativeHorizontalSize(ref, percent);
    };

    // Calculate relative vertical size in 3D space in percent of the referenced elements height (100% is half of elements height)
    const getRelativeVerticalSize = (
      ref: React.MutableRefObject<HTMLElement | null>,
      percent: number
    ) => {
      let elementHeight;

      if (ref.current == null) {
        elementHeight = 0;
      } else {
        elementHeight = ref.current!.getBoundingClientRect().height;
      }

      return (((percent / 100) * elementHeight) / window.innerHeight) * 3.5;
    };

    // Calculate relative vertical position in 3D space in percent of the referenced elements height (0% is centered position)
    const getRelativeVerticalPosition = (
      ref: React.MutableRefObject<HTMLElement | null>,
      percent: number
    ) => {
      let elementCenter;

      if (ref.current == null) {
        elementCenter = 0;
      } else {
        elementCenter =
          ((ref.current!.offsetTop +
            ref.current!.getBoundingClientRect().height * 0.5 -
            window.innerHeight * 0.5) /
            window.innerHeight) *
          -7;
      }

      return elementCenter - getRelativeVerticalSize(ref, percent);
    };

    // Thresholds for beginnings of each section

    const thresholdHome = 0;
    const thresholdAbout =
      sectionRefs.headerRef.current!.offsetTop +
      sectionRefs.headerRef.current!.getBoundingClientRect().height * 0.5;
    const thresholdWaveAnimation =
      sectionRefs.technologiesRef.current!.offsetTop +
      sectionRefs.technologiesRef.current!.getBoundingClientRect().height * 0.3;

    // Base positions in 3D space for each section

    const basePositionHome = new Vector3(
      getRelativeHorizontalPosition(sectionRefs.headerRef, 80),
      getRelativeVerticalPosition(sectionRefs.headerRef, 0),
      0
    );
    const basePositionAbout = new Vector3(
      getRelativeHorizontalPosition(sectionRefs.aboutRef, -50),
      getRelativeVerticalPosition(sectionRefs.aboutRef, 0),
      0
    );
    const basePositionWaveAnimation = new Vector3(
      0,
      getRelativeVerticalPosition(sectionRefs.waveAnimationPlaceholderRef, 0),
      0
    );

    // Base rotations in 3D space for each section

    const baseRotationAbout = new Vector3(1, 0, 0);
    const baseRotationHome = new Vector3(0, 0, 0);
    const baseRotationWaveAnimation = new Vector3(-1, 0, 0);

    // Change currentSection and sectionChangedTime if threshold is passed
    prevCurrentSection = currentSection;
    if (window.scrollY >= thresholdWaveAnimation && currentSection != 2) {
      currentSection != -1 && (sectionChangedTime = clock.elapsedTime);
      currentSection = 2;
    } else if (
      window.scrollY >= thresholdAbout &&
      window.scrollY < thresholdWaveAnimation &&
      currentSection != 1
    ) {
      currentSection != -1 && (sectionChangedTime = clock.elapsedTime);
      currentSection = 1;
    } else if (
      window.scrollY >= thresholdHome &&
      window.scrollY < thresholdAbout &&
      currentSection != 0
    ) {
      currentSection != -1 && (sectionChangedTime = clock.elapsedTime);
      currentSection = 0;
    }

    // Set currentSection of individual cubes with delay depending on cubes index
    for (
      let i = prevCurrentSection > currentSection ? cubes.length : 0;
      prevCurrentSection > currentSection ? i > 0 : i < cubes.length;
      prevCurrentSection > currentSection ? i-- : i++
    ) {
      if (clock.elapsedTime >= sectionChangedTime + i * 0.1) {
        cubes[i].currentSection = currentSection;
      }
    }

    // Set custom arrangement position for each cube according to its current section
    if (cubes.every((cube) => cube.ref.current != null)) {
      cubes.forEach((cube, index) => {
        // Wave Animation Section
        if (cube.currentSection == 2) {
          // Set target rotation for cube in current section
          cube.targetRotation = new Quaternion().setFromAxisAngle(
            baseRotationWaveAnimation,
            0.5 * Math.PI
          );

          // Parameters for arrangement in current section
          let horizontalExtend = Math.min(
            getRelativeHorizontalSize(
              sectionRefs.waveAnimationPlaceholderRef,
              180
            ),
            13
          );

          // Set target position of cube for arrangement in current section
          cube.targetPosition = new Vector3(
            (index + 0.5) * (horizontalExtend / cubes.length) -
              horizontalExtend * 0.5,
            0,
            0
          ).add(basePositionWaveAnimation);

          // Set target scale of cube in current section
          cube.targetScale = new Vector3(0.9, 0.9, 0.9);

          return;
        }

        // About Section
        if (cube.currentSection == 1) {
          // Set target rotation for cube in current section
          cube.targetRotation = new Quaternion().setFromAxisAngle(
            baseRotationAbout,
            0.5 * Math.PI
          );

          // Parameters for arrangement in current section
          let speed = 0.1;
          let radius = Math.min(
            getRelativeHorizontalSize(sectionRefs.aboutRef, 25),
            2
          );

          // Set target position of cube for arrangement in current section
          cube.targetPosition = new Vector3(
            Math.sin(
              ((2 * Math.PI) / cubes.length) * index +
                clock.elapsedTime * speed -
                0.5 * Math.PI
            ) * radius,
            Math.cos(
              ((2 * Math.PI) / cubes.length) * index +
                clock.elapsedTime * speed -
                0.5 * Math.PI
            ) * radius,
            0
          ).add(basePositionAbout);

          // Set target scale of cube in current section
          cube.targetScale = new Vector3(1, 1, 1);

          return;
        }

        // Header Section
        if (cube.currentSection == 0) {
          // Set target rotation for cube in current section
          cube.targetRotation = new Quaternion().setFromAxisAngle(
            baseRotationHome,
            0.5 * Math.PI
          );

          // Parameters for arrangement in current section
          let horizontalExtend = Math.min(
            getRelativeHorizontalSize(sectionRefs.headerRef, 15),
            1.5
          );
          let verticalExtend = Math.min(
            getRelativeVerticalSize(sectionRefs.headerRef, 100),
            4
          );

          // Set target position of cube for arrangement in current section
          cube.targetPosition = new Vector3(
            -horizontalExtend * (index % 2) + horizontalExtend * 0.5,
            -(verticalExtend / (cubes.length - 1)) * index +
              verticalExtend * 0.5,
            0
          ).add(basePositionHome);

          // Set target scale of cube in current section
          cube.targetScale = new Vector3(0.7, 0.7, 0.7);

          return;
        }
      });

      // How smooth the transforms should appear
      let smoothness = 0.05;

      // Move cubes to targetPosition and add rotation
      cubes.forEach((cube) => {
        // Jump to position if no previous position is set, otherwise transition smoothly
        if (cube.ref.current!.position.equals(new Vector3(0, 0, 0))) {
          cube.ref.current!.position.lerp(cube.targetPosition, 1);
        } else {
          cube.ref.current!.position.lerp(cube.targetPosition, smoothness);
        }

        // Jump to scale if no previous scale is set, otherwise transition smoothly
        if (cube.ref.current!.scale.equals(new Vector3(1, 1, 1))) {
          cube.ref.current!.scale.lerp(cube.targetScale, 1);
        } else {
          cube.ref.current!.scale.lerp(cube.targetScale, smoothness);
        }

        // Jump to scale if no previous scale is set, otherwise transition smoothly
        cube.ref.current!.quaternion.slerp(cube.targetRotation, smoothness);
      });
    }
  });

  return (
    <>
      {cubes.map((cube, index) => (
        <Cube
          ref={cube.ref}
          key={index}
          letterAbout={cube.letterAbout}
          letterPortfolio={cube.letterPortfolio}
        />
      ))}
    </>
  );
};

export default Cubes;
