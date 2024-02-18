"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import {
  Color,
  Euler,
  Group,
  Mesh,
  MeshLambertMaterial,
  Quaternion,
  Vector3,
} from "three";
import Cube from "./Cube";
import { useGLTF } from "@react-three/drei";

const Cubes = () => {
  // Create individual cubes.
  const cubes = [
    {
      ref: useRef<Group>(null),
      section: useRef(0),
      targetPosition: new Vector3(0, 0, 0),
      targetScale: new Vector3(1, 1, 1),
      targetRotation: new Quaternion(),
      imageUrl: "/images/technologies/android-grey.svg",
      letterAbout: "A",
      letterPortfolio: "W",
      letterCareer: "S",
      letterContact: "R",
    },
    {
      ref: useRef<Group>(null),
      section: useRef(0),
      targetPosition: new Vector3(0, 0, 0),
      targetScale: new Vector3(1, 1, 1),
      targetRotation: new Quaternion(),
      imageUrl: "/images/technologies/flutter-grey.svg",
      letterAbout: "B",
      letterPortfolio: "O",
      letterCareer: "T",
      letterContact: "E",
    },
    {
      ref: useRef<Group>(null),
      section: useRef(0),
      targetPosition: new Vector3(0, 0, 0),
      targetScale: new Vector3(1, 1, 1),
      targetRotation: new Quaternion(),
      imageUrl: "/images/technologies/ios-grey.svg",
      letterAbout: "O",
      letterPortfolio: "R",
      letterCareer: "E",
      letterContact: "A",
    },
    {
      ref: useRef<Group>(null),
      section: useRef(0),
      targetPosition: new Vector3(0, 0, 0),
      targetScale: new Vector3(1, 1, 1),
      targetRotation: new Quaternion(),
      imageUrl: "/images/technologies/react-grey.svg",
      letterAbout: "U",
      letterPortfolio: "K",
      letterCareer: "P",
      letterContact: "C",
    },
    {
      ref: useRef<Group>(null),
      section: useRef(0),
      targetPosition: new Vector3(0, 0, 0),
      targetScale: new Vector3(1, 1, 1),
      targetRotation: new Quaternion(),
      imageUrl: "/images/technologies/unity-grey.svg",
      letterAbout: "T",
      letterPortfolio: "S",
      letterCareer: "S",
      letterContact: "H",
    },
  ];

  // Set initial values
  let currentSection = -1;
  let sectionChangedTime = -10;

  // Call on every frame
  useFrame(({ clock }) => {
    const canvasWrapper = document.getElementById("canvasWrapper");
    if (canvasWrapper == null) {
      return;
    }

    const windowWidth = canvasWrapper.clientWidth;
    const windowHeight = canvasWrapper.clientHeight;

    // Calculate relative horizontal size in 3D space in percent of the referenced elements width (100% is half of elements width)
    const getRelativeHorizontalSize = (
      element: HTMLElement,
      percent: number
    ) => {
      let elementWidth;

      elementWidth = element.getBoundingClientRect().width;

      return (((percent / 100) * elementWidth) / windowHeight) * 3.5;
    };

    // Calculate relative horizontal position in 3D space in percent of the referenced elements width (0% is centered position)
    const getRelativeHorizontalPosition = (
      element: HTMLElement,
      percent: number
    ) => {
      const offsetLeft = element.getBoundingClientRect().left + window.scrollX

      const elementCenterHTML =
        offsetLeft + element.getBoundingClientRect().width * 0.5;

      const elementCenterThree =
        (((elementCenterHTML / windowWidth - 0.5) * windowWidth) /
          windowHeight) *
        7;
      return elementCenterThree + getRelativeHorizontalSize(element, percent);
    };

    // Calculate relative vertical size in 3D space in percent of the referenced elements height (100% is half of elements height)
    const getRelativeVerticalSize = (element: HTMLElement, percent: number) => {
      let elementHeight;

      elementHeight = element.getBoundingClientRect().height;

      return (((percent / 100) * elementHeight) / windowHeight) * 3.5;
    };

    // Calculate relative vertical position in 3D space in percent of the referenced elements height (0% is centered position)
    const getRelativeVerticalPosition = (
      element: HTMLElement,
      percent: number
    ) => {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY

      const elementCenterHTML =
        offsetTop + element.getBoundingClientRect().height * 0.5;

      const elementCenterThree =
        ((elementCenterHTML -
          windowHeight * 0.5) /
          windowHeight) *
        -7;

      return elementCenterThree - getRelativeVerticalSize(element, percent);
    };

    // Relevant sections

    let headerSection = document.getElementById("header");
    let aboutSection = document.getElementById("about");
    let aboutPlaceholder = document.getElementById("aboutPlaceholder");
    let technologiesSection = document.getElementById("technologies");
    let portfolioSection = document.getElementById("portfolio");
    let careerSection = document.getElementById("career");
    let contactSection = document.getElementById("contact");
    let contactPlaceholder = document.getElementById("contactPlaceholder");

    // Check if sections are not null
    if (
      headerSection == null ||
      aboutSection == null ||
      aboutPlaceholder == null ||
      technologiesSection == null ||
      portfolioSection == null ||
      careerSection == null ||
      contactSection == null ||
      contactPlaceholder == null
    ) {
      cubes[0].targetPosition = new Vector3(10, 0, 0);
      cubes[1].targetPosition = new Vector3(10, 0, 0);
      cubes[2].targetPosition = new Vector3(10, 0, 0);
      cubes[3].targetPosition = new Vector3(10, 0, 0);
      cubes[4].targetPosition = new Vector3(10, 0, 0);
    } else {
      // Base positions in 3D space for each section

      let basePositions = [
        // Header
        new Vector3(
          getRelativeHorizontalPosition(headerSection, 80),
          getRelativeVerticalPosition(headerSection, 0),
          0
        ),
        // About
        new Vector3(
          getRelativeHorizontalPosition(aboutPlaceholder, 0),
          getRelativeVerticalPosition(aboutPlaceholder, 0),
          0
        ),
        // Portfolio
        new Vector3(
          getRelativeHorizontalPosition(portfolioSection, 0),
          getRelativeVerticalPosition(portfolioSection, 0),
          0
        ),
        // Career
        new Vector3(
          getRelativeHorizontalPosition(careerSection, 0),
          getRelativeVerticalPosition(careerSection, 0),
          0
        ),
        // Contact
        new Vector3(
          getRelativeHorizontalPosition(contactPlaceholder, 0),
          getRelativeVerticalPosition(contactPlaceholder, 0),
          0
        ),
      ];

      // Base rotations in 3D space for each section

      const baseRotations = [
        // Header
        new Quaternion().setFromAxisAngle(new Vector3(0, 0, 0), 0),
        // About
        new Quaternion().setFromAxisAngle(new Vector3(1, 0, 0), Math.PI),
        // Portfolio
        new Quaternion().setFromAxisAngle(new Vector3(0, 0, 0), 0),
        // Career
        new Quaternion().setFromAxisAngle(new Vector3(1, 0, 0), Math.PI),
        // Contact
        new Quaternion().setFromAxisAngle(new Vector3(0, 0, 0), 0),
      ];

      // Base scales in 3D space for each section

      let baseScales = [
        // Header
        new Vector3(0.65, 0.65, 0.65),
        // About
        new Vector3(0.8, 0.8, 0.8),
        // Portfolio
        new Vector3(0.8, 0.8, 0.8),
        // Career
        new Vector3(0.8, 0.8, 0.8),
        // Contact
        new Vector3(0.8, 0.8, 0.8),
      ];

      if (windowWidth < 960) {
        // Header
        basePositions[0] = new Vector3(
          getRelativeHorizontalPosition(headerSection, 0),
          getRelativeVerticalPosition(aboutPlaceholder, 0),
          0
        );
      }

      if (windowWidth < 600) {
        baseScales = [
          // Header
          new Vector3(0.65, 0.65, 0.65),
          // About
          new Vector3(0.7, 0.7, 0.7),
          // Portfolio
          new Vector3(0.5, 0.5, 0.5),
          // Career
          new Vector3(0.5, 0.5, 0.5),
          // Contact
          new Vector3(0.7, 0.7, 0.7),
        ];
      }

      // Change currentSection and sectionChangedTime if threshold is passed
      if (window.scrollY >= contactSection.offsetTop - windowHeight * 0.75) {
        if (currentSection != 4) {
          currentSection != -1 && (sectionChangedTime = clock.elapsedTime);
          currentSection = 4;
        }
      } else if (
        window.scrollY >=
        careerSection.offsetTop - windowHeight * 0.75
      ) {
        if (currentSection != 3) {
          currentSection != -1 && (sectionChangedTime = clock.elapsedTime);
          currentSection = 3;
        }
      } else if (
        window.scrollY >=
        portfolioSection.offsetTop - windowHeight * 0.75
      ) {
        if (currentSection != 2) {
          currentSection != -1 && (sectionChangedTime = clock.elapsedTime);
          currentSection = 2;
        }
      } else if (
        window.scrollY >=
        aboutSection.offsetTop - windowHeight * 0.75
      ) {
        if (currentSection != 1) {
          currentSection != -1 && (sectionChangedTime = clock.elapsedTime);
          currentSection = 1;
        }
      } else if (
        window.scrollY >=
        headerSection.offsetTop - windowHeight * 0.75
      ) {
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

          // Header Section
          if (cube.section.current == 0 && headerSection != null) {
            // Parameters for arrangement in current section

            let horizontalExtend = Math.min(
              getRelativeHorizontalSize(headerSection, 15),
              1.5
            );
            if (windowWidth < 960) {
              horizontalExtend = getRelativeHorizontalPosition(
                headerSection,
                400
              );
            }
            let verticalExtend = Math.min(
              getRelativeVerticalSize(headerSection, 100),
              4
            );

            // Set target position of cube for arrangement in current section
            cube.targetPosition = new Vector3(
              -horizontalExtend * (index % 2) + horizontalExtend * 0.5,
              -(verticalExtend / (cubes.length - 1)) * index +
                verticalExtend * 0.5,
              0
            );

            cube.targetRotation = new Quaternion();

            const delay = 30;
            const duration = 0.75;

            const interval =
              (clock.elapsedTime + (index / cubes.length) * delay) % delay;
            if (interval < duration) {
              cube.targetRotation = new Quaternion().setFromEuler(
                new Euler(
                  index % 3 == 0 ? (interval / duration) * Math.PI * 2 : 0,
                  index % 3 == 1 ? (interval / duration) * Math.PI * 2 : 0,
                  index % 3 == 2 ? (interval / duration) * Math.PI * 2 : 0
                )
              );
            }
          }

          // About Section
          if (cube.section.current == 1 && aboutSection != null) {
            // Parameters for arrangement in current section
            let speed = 0.1;
            let radius = Math.min(
              getRelativeHorizontalSize(aboutSection, 25),
              2
            );
            if (windowWidth < 960) {
              radius = 1.2;
            }
            if (windowWidth < 450) {
              radius = 1;
            }

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
            );

            cube.targetRotation = new Quaternion();
          }

          // Portfolio Headline Section
          if (cube.section.current == 2 && portfolioSection != null) {
            // Parameters for arrangement in current section
            let horizontalExtend = Math.min(
              getRelativeHorizontalSize(portfolioSection, 180),
              13
            );
            if (windowWidth < 450) {
              horizontalExtend = Math.min(
                getRelativeHorizontalSize(portfolioSection, 200),
                13
              );
            }

            // Set target position of cube for arrangement in current section
            cube.targetPosition = new Vector3(
              (index + 0.5) * (horizontalExtend / cubes.length) -
                horizontalExtend * 0.5,
              0,
              0
            );

            cube.targetRotation = new Quaternion();
          }

          // Career Headline Section
          if (cube.section.current == 3 && careerSection != null) {
            // Parameters for arrangement in current section
            let horizontalExtend = Math.min(
              getRelativeHorizontalSize(careerSection, 180),
              13
            );
            if (windowWidth < 450) {
              horizontalExtend = Math.min(
                getRelativeHorizontalSize(careerSection, 200),
                13
              );
            }

            // Set target position of cube for arrangement in current section
            cube.targetPosition = new Vector3(
              (index + 0.5) * (horizontalExtend / cubes.length) -
                horizontalExtend * 0.5,
              0,
              0
            );

            cube.targetRotation = new Quaternion();
          }

          // Contact Section
          if (cube.section.current == 4 && contactSection != null) {
            // Set target rotation for cube in current section
            cube.targetRotation = baseRotations[cube.section.current];

            // Parameters for arrangement in current section
            let speed = 0.1;
            let radius = Math.min(
              getRelativeHorizontalSize(contactSection, 25),
              2
            );
            if (windowWidth < 960) {
              radius = 1.2;
            }
            if (windowWidth < 450) {
              radius = 1;
            }

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
            );

            cube.targetRotation = new Quaternion();
          }

          // Set target position for cube in current section
          cube.targetPosition.add(basePositions[cube.section.current]);

          // Set target rotation for cube in current section
          cube.targetRotation.multiply(baseRotations[cube.section.current]);

          // Set target scale of cube in current section responsively
          cube.targetScale = baseScales[cube.section.current];
        });
      }
    }

    // How smooth the transforms should appear
    let smoothness = 0.08;

    // Move cubes to targetPosition and add rotation
    cubes.forEach((cube) => {
      if (!cube.ref.current) {
        return;
      }

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
  });

  const cubeGeometry = (useGLTF("/models/cube.glb").nodes.Cube as Mesh)
    .geometry;
  const cubeMaterial = new MeshLambertMaterial();
  cubeMaterial.color = new Color(0xffffff);

  return (
    <>
      {cubes.map((cube, index) => (
        <Cube
          ref={cube.ref}
          geometry={cubeGeometry}
          material={cubeMaterial}
          section={cube.section}
          key={index}
          imageUrl={cube.imageUrl}
          letterAbout={cube.letterAbout}
          letterPortfolio={cube.letterPortfolio}
          letterCareer={cube.letterCareer}
          letterContact={cube.letterContact}
        />
      ))}
    </>
  );
};

export default Cubes;

useGLTF.preload("/models/cube.glb");
