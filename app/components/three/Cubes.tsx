"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group, Quaternion, Vector3 } from "three";
import Cube from "./Cube";

const Cubes = () => {
  // Create individual cubes.
  const cubes = [
    {
      ref: useRef<Group>(null),
      section: useRef(0),    
      targetPosition: new Vector3(0, 0, 0),
      targetScale: new Vector3(1, 1, 1),
      targetRotation: new Quaternion(),
      letterAbout: "A",
      letterPortfolio: "W",
      letterCareer: "C",
    },
    {
      ref: useRef<Group>(null),
      section: useRef(0),   
      targetPosition: new Vector3(0, 0, 0),
      targetScale: new Vector3(1, 1, 1),
      targetRotation: new Quaternion(),
      letterAbout: "B",
      letterPortfolio: "O",
      letterCareer: "A",
    },
    {
      ref: useRef<Group>(null),
      section: useRef(0),   
      targetPosition: new Vector3(0, 0, 0),
      targetScale: new Vector3(1, 1, 1),
      targetRotation: new Quaternion(),
      letterAbout: "O",
      letterPortfolio: "R",
      letterCareer: "R",
    },
    {
      ref: useRef<Group>(null),
      section: useRef(0),   
      targetPosition: new Vector3(0, 0, 0),
      targetScale: new Vector3(1, 1, 1),
      targetRotation: new Quaternion(),
      letterAbout: "U",
      letterPortfolio: "K",
      letterCareer: "E",
    },
    {
      ref: useRef<Group>(null),
      section: useRef(0),   
      targetPosition: new Vector3(0, 0, 0),
      targetScale: new Vector3(1, 1, 1),
      targetRotation: new Quaternion(),
      letterAbout: "T",
      letterPortfolio: "S",
      letterCareer: "E",
    },
    {
      ref: useRef<Group>(null),
      section: useRef(0),   
      targetPosition: new Vector3(0, 0, 0),
      targetScale: new Vector3(1, 1, 1),
      targetRotation: new Quaternion(),
      letterAbout: ".",
      letterPortfolio: ".",
      letterCareer: "R",
    },
  ];

  // Set initial values
  let currentSection = -1;
  let sectionChangedTime = -10;

  // Call on every frame
  useFrame(({ clock }) => {
    let headerSection = document.getElementById("header");
    let aboutSection = document.getElementById("about");
    let technologiesSection = document.getElementById("technologies");
    let portfolioHeadlineSection = document.getElementById("portfolioHeadline");
    let careerHeadlineSection = document.getElementById("careerHeadline");

    // Check if section refs are not null
    if (
      headerSection == null ||
      aboutSection == null ||
      technologiesSection == null ||
      portfolioHeadlineSection == null ||
      careerHeadlineSection == null
    ) {
      return;
    }

    // Calculate relative horizontal size in 3D space in percent of the referenced elements width (100% is half of elements width)
    const getRelativeHorizontalSize = (
      element: HTMLElement,
      percent: number
    ) => {
      let elementWidth;

      elementWidth = element.getBoundingClientRect().width;

      return (((percent / 100) * elementWidth) / window.innerHeight) * 3.5;
    };

    // Calculate relative horizontal position in 3D space in percent of the referenced elements width (0% is centered position)
    const getRelativeHorizontalPosition = (
      element: HTMLElement,
      percent: number
    ) => {
      let elementCenter;
      elementCenter =
        ((element.offsetLeft +
          element.getBoundingClientRect().width * 0.5 -
          window.innerWidth * 0.5) /
          window.innerWidth) *
        20;

      return elementCenter + getRelativeHorizontalSize(element, percent);
    };

    // Calculate relative vertical size in 3D space in percent of the referenced elements height (100% is half of elements height)
    const getRelativeVerticalSize = (element: HTMLElement, percent: number) => {
      let elementHeight;

      elementHeight = element.getBoundingClientRect().height;

      return (((percent / 100) * elementHeight) / window.innerHeight) * 3.5;
    };

    // Calculate relative vertical position in 3D space in percent of the referenced elements height (0% is centered position)
    const getRelativeVerticalPosition = (
      element: HTMLElement,
      percent: number
    ) => {
      let elementCenter;

      elementCenter =
        ((element.offsetTop +
          element.getBoundingClientRect().height * 0.5 -
          window.innerHeight * 0.5) /
          window.innerHeight) *
        -7;

      return elementCenter - getRelativeVerticalSize(element, percent);
    };

    // Thresholds for beginnings of each section

    const thresholdHome = 0;
    const thresholdAbout = aboutSection.offsetTop - window.innerHeight * 0.75;
    const thresholdPortfolioHeadline =
      portfolioHeadlineSection.offsetTop - window.innerHeight * 0.75;
    const thresholdCareerHeadline =
      careerHeadlineSection.offsetTop - window.innerHeight * 0.75;

    // Base positions in 3D space for each section

    const basePositionHome = new Vector3(
      getRelativeHorizontalPosition(headerSection, 80),
      getRelativeVerticalPosition(headerSection, 0),
      0
    );
    const basePositionAbout = new Vector3(
      getRelativeHorizontalPosition(aboutSection, -50),
      getRelativeVerticalPosition(aboutSection, 0),
      0
    );
    const basePositionPortfolioHeadline = new Vector3(
      0,
      getRelativeVerticalPosition(portfolioHeadlineSection, 0),
      0
    );
    const basePositionCareerHeadline = new Vector3(
      0,
      getRelativeVerticalPosition(careerHeadlineSection, 0),
      0
    );

    // Base rotations in 3D space for each section

    const baseRotationHome = new Quaternion().setFromAxisAngle(
      new Vector3(0, 0, 0),
      0
    );
    const baseRotationAbout = new Quaternion().setFromAxisAngle(
      new Vector3(1, 0, 0),
      Math.PI
    );
    const baseRotationPortfolioHeadline = new Quaternion().setFromAxisAngle(
      new Vector3(0, 0, 0),
      0
    );
    const baseRotationCareerHeadline = new Quaternion().setFromAxisAngle(
      new Vector3(1, 0, 0),
      Math.PI
    );

    // Change currentSection and sectionChangedTime if threshold is passed
    if (window.scrollY >= thresholdCareerHeadline) {
      if (currentSection != 3) {
        currentSection != -1 && (sectionChangedTime = clock.elapsedTime);
        currentSection = 3;
      }
    } else if (window.scrollY >= thresholdPortfolioHeadline) {
      if (currentSection != 2) {
        currentSection != -1 && (sectionChangedTime = clock.elapsedTime);
        currentSection = 2;
      }
    } else if (window.scrollY >= thresholdAbout) {
      if (currentSection != 1) {
        currentSection != -1 && (sectionChangedTime = clock.elapsedTime);
        currentSection = 1;
      }
    } else if (window.scrollY >= thresholdHome) {
      if (currentSection != 0) {
        currentSection != -1 && (sectionChangedTime = clock.elapsedTime);
        currentSection = 0;
      }
    }

    // Set custom arrangement position for each cube according to its current section
    if (cubes.every((cube) => cube.ref.current != null)) {
      cubes.forEach((cube, index) => {
        // Set currentSection of individual cubes with delay depending on cubes index
        if (clock.elapsedTime >= sectionChangedTime + index * 0.1) {
          cube.section.current = currentSection;
        }

        // Career Headline Section
        if (cube.section.current == 3 && careerHeadlineSection != null) {
          // Set maximum number of visible cubes
          const maxCubeCount = 6;
          let unnecessary = false;
          if(index > maxCubeCount - 1){
            unnecessary = true;
            index = maxCubeCount - 1;
          }

          // Set target rotation for cube in current section
          cube.targetRotation = baseRotationCareerHeadline;

          // Parameters for arrangement in current section
          let horizontalExtend = Math.min(
            getRelativeHorizontalSize(careerHeadlineSection, 180),
            13
          );

          // Set target position of cube for arrangement in current section
          cube.targetPosition = new Vector3(
            (index + 0.5) * (horizontalExtend / Math.min(cubes.length, maxCubeCount)) -
              horizontalExtend * 0.5,
            0,
            0
          ).add(basePositionCareerHeadline);

          // Set target scale of cube in current section
          cube.targetScale = new Vector3(0.9, 0.9, 0.9);

          // Hide unnecessary cube
          if(unnecessary){
            cube.targetScale = new Vector3(0,0,0);
          }
        }

        // Portfolio Headline Section
        if (cube.section.current == 2 && portfolioHeadlineSection != null) {
          // Set maximum number of visible cubes
          const maxCubeCount = 5;
          let unnecessary = false;
          if(index > maxCubeCount - 1){
            unnecessary = true;
            index = maxCubeCount - 1;
          }

          // Set target rotation for cube in current section
          cube.targetRotation = baseRotationPortfolioHeadline;

          // Parameters for arrangement in current section
          let horizontalExtend = Math.min(
            getRelativeHorizontalSize(portfolioHeadlineSection, 180),
            13
          );

          // Set target position of cube for arrangement in current section
          cube.targetPosition = new Vector3(
            (index + 0.5) * (horizontalExtend / Math.min(cubes.length, maxCubeCount)) -
              horizontalExtend * 0.5,
            0,
            0
          ).add(basePositionPortfolioHeadline);

          // Set target scale of cube in current section
          cube.targetScale = new Vector3(0.9, 0.9, 0.9);

          // Hide unnecessary cube
          if(unnecessary){
            cube.targetScale = new Vector3(0,0,0);
          }

          return;
        }

        // About Section
        if (cube.section.current == 1 && aboutSection != null) {
          // Set maximum number of visible cubes
          const maxCubeCount = 5;
          let unnecessary = false;
          if(index > maxCubeCount - 1){
            unnecessary = true;
            index = maxCubeCount - 1;
          }

          // Set target rotation for cube in current section
          cube.targetRotation = baseRotationAbout;

          // Parameters for arrangement in current section
          let speed = 0.1;
          let radius = Math.min(getRelativeHorizontalSize(aboutSection, 25), 2);

          // Set target position of cube for arrangement in current section
          cube.targetPosition = new Vector3(
            Math.sin(
              ((2 * Math.PI) / Math.min(cubes.length, maxCubeCount)) * index +
                clock.elapsedTime * speed -
                0.5 * Math.PI
            ) * radius,
            Math.cos(
              ((2 * Math.PI) / Math.min(cubes.length, maxCubeCount)) * index +
                clock.elapsedTime * speed -
                0.5 * Math.PI
            ) * radius,
            0
          ).add(basePositionAbout);

          // Set target scale of cube in current section
          cube.targetScale = new Vector3(1, 1, 1);

          // Hide unnecessary cube
          if(unnecessary){
            cube.targetScale = new Vector3(0,0,0);
          }

          return;
        }

        // Header Section
        if (cube.section.current == 0 && headerSection != null) {
          // Set maximum number of visible cubes
          const maxCubeCount = 5;
          let unnecessary = false;
          if(index > maxCubeCount - 1){
            unnecessary = true;
            index = maxCubeCount - 1;
          }

          // Set target rotation for cube in current section
          cube.targetRotation = baseRotationHome;

          // Parameters for arrangement in current section
          let horizontalExtend = Math.min(
            getRelativeHorizontalSize(headerSection, 15),
            1.5
          );
          let verticalExtend = Math.min(
            getRelativeVerticalSize(headerSection, 100),
            4
          );

          // Set target position of cube for arrangement in current section
          cube.targetPosition = new Vector3(
            -horizontalExtend * (index % 2) + horizontalExtend * 0.5,
            -(verticalExtend / (Math.min(cubes.length, maxCubeCount) - 1)) * index +
              verticalExtend * 0.5,
            0
          ).add(basePositionHome);

          // Set target scale of cube in current section
          cube.targetScale = new Vector3(0.7, 0.7, 0.7);
          
          // Hide unnecessary cube
          if(unnecessary){
            cube.targetScale = new Vector3(0,0,0);
          }

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
          section={cube.section}
          key={index}
          letterAbout={cube.letterAbout}
          letterPortfolio={cube.letterPortfolio}
          letterCareer={cube.letterCareer}
        />
      ))}
    </>
  );
};

export default Cubes;
