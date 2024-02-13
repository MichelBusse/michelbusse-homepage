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
      letterCareer: "S",
      letterContact: "R",
    },
    {
      ref: useRef<Group>(null),
      section: useRef(0),
      targetPosition: new Vector3(0, 0, 0),
      targetScale: new Vector3(1, 1, 1),
      targetRotation: new Quaternion(),
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

    // Relevant sections

    let headerSection = document.getElementById("header");
    let aboutSection = document.getElementById("about");
    let technologiesSection = document.getElementById("technologies");
    let portfolioHeadlineSection = document.getElementById("portfolioHeadline");
    let careerHeadlineSection = document.getElementById("careerHeadline");
    let contactSection = document.getElementById("contact");

    // Check if sections are not null
    if (
      headerSection == null ||
      aboutSection == null ||
      technologiesSection == null ||
      portfolioHeadlineSection == null ||
      careerHeadlineSection == null ||
      contactSection == null
    ) {
      return;
    }

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
        getRelativeHorizontalPosition(aboutSection, -50),
        getRelativeVerticalPosition(aboutSection, 0),
        0
      ),
      // PortfolioHeadline
      new Vector3(
        0,
        getRelativeVerticalPosition(portfolioHeadlineSection, 0),
        0
      ),
      // CareerHeadline
      new Vector3(0, getRelativeVerticalPosition(careerHeadlineSection, 0), 0),
      // Contact
      new Vector3(
        getRelativeHorizontalPosition(contactSection, -50),
        getRelativeVerticalPosition(contactSection, 0),
        0
      ),
    ];

    // Base rotations in 3D space for each section

    const baseRotations = [
      // Header
      new Quaternion().setFromAxisAngle(new Vector3(0, 0, 0), 0),
      // About
      new Quaternion().setFromAxisAngle(new Vector3(1, 0, 0), Math.PI),
      // PortfolioHeadline
      new Quaternion().setFromAxisAngle(new Vector3(0, 0, 0), 0),
      // CareerHeadline
      new Quaternion().setFromAxisAngle(new Vector3(1, 0, 0), Math.PI),
      // Contact
      new Quaternion().setFromAxisAngle(new Vector3(0, 0, 0), 0),
    ];

    // Base scales in 3D space for each section

    let baseScales = [
      // Header
      new Vector3(0.7, 0.7, 0.7),
      // About
      new Vector3(0.9, 0.9, 0.9),
      // PortfolioHeadline
      new Vector3(0.9, 0.9, 0.9),
      // CareerHeadline
      new Vector3(0.9, 0.9, 0.9),
      // Contact
      new Vector3(0.9, 0.9, 0.9),
    ];

    if (window.innerWidth < 1050) {
      baseScales = [
        // Header
        new Vector3(0.7, 0.7, 0.7),
        // About
        new Vector3(0.8, 0.8, 0.8),
        // PortfolioHeadline
        new Vector3(0.8, 0.8, 0.8),
        // CareerHeadline
        new Vector3(0.8, 0.8, 0.8),
        // Contact
        new Vector3(0.8, 0.8, 0.8),
      ];
    }

    if (window.innerWidth < 960) {
      // Header
      basePositions[0] = new Vector3(
        getRelativeHorizontalPosition(headerSection, 0),
        getRelativeVerticalPosition(aboutSection, -100) -
          getRelativeHorizontalSize(aboutSection, 100),
        0
      );
      // About
      basePositions[1] = new Vector3(
        getRelativeHorizontalPosition(aboutSection, 0),
        getRelativeVerticalPosition(aboutSection, -100) - 1.6,
        0
      );

      // Contact
      basePositions[4] = new Vector3(
        getRelativeHorizontalPosition(contactSection, 0),
        getRelativeVerticalPosition(contactSection, -100) - 1.6,
        0
      );
    }

    if (window.innerWidth < 600) {
      // About
      basePositions[1] = new Vector3(
        getRelativeHorizontalPosition(aboutSection, 0),
        getRelativeVerticalPosition(aboutSection, -100) - 1.4,
        0
      );

      // Contact
      basePositions[4] = new Vector3(
        getRelativeHorizontalPosition(contactSection, 0),
        getRelativeVerticalPosition(contactSection, -100) - 1.4,
        0
      );
      baseScales = [
        // Header
        new Vector3(0.7, 0.7, 0.7),
        // About
        new Vector3(0.7, 0.7, 0.7),
        // PortfolioHeadline
        new Vector3(0.5, 0.5, 0.5),
        // CareerHeadline
        new Vector3(0.5, 0.5, 0.5),
        // Contact
        new Vector3(0.7, 0.7, 0.7),
      ];
    }

    if (window.innerWidth < 450) {
      // About
      basePositions[1] = new Vector3(
        getRelativeHorizontalPosition(aboutSection, 0),
        getRelativeVerticalPosition(aboutSection, -100) - 1.3,
        0
      );

      // Contact
      basePositions[4] = new Vector3(
        getRelativeHorizontalPosition(contactSection, 0),
        getRelativeVerticalPosition(contactSection, -100) - 1.3,
        0
      );
    }

    // Change currentSection and sectionChangedTime if threshold is passed
    if (
      window.scrollY >=
      contactSection.offsetTop - window.innerHeight * 0.75
    ) {
      if (currentSection != 4) {
        currentSection != -1 && (sectionChangedTime = clock.elapsedTime);
        currentSection = 4;
      }
    } else if (
      window.scrollY >=
      careerHeadlineSection.offsetTop - window.innerHeight * 0.75
    ) {
      if (currentSection != 3) {
        currentSection != -1 && (sectionChangedTime = clock.elapsedTime);
        currentSection = 3;
      }
    } else if (
      window.scrollY >=
      portfolioHeadlineSection.offsetTop - window.innerHeight * 0.75
    ) {
      if (currentSection != 2) {
        currentSection != -1 && (sectionChangedTime = clock.elapsedTime);
        currentSection = 2;
      }
    } else if (
      window.scrollY >=
      aboutSection.offsetTop - window.innerHeight * 0.75
    ) {
      if (currentSection != 1) {
        currentSection != -1 && (sectionChangedTime = clock.elapsedTime);
        currentSection = 1;
      }
    } else if (
      window.scrollY >=
      headerSection.offsetTop - window.innerHeight * 0.75
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
          if (window.innerWidth < 960) {
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
        }

        // About Section
        if (cube.section.current == 1 && aboutSection != null) {
          // Parameters for arrangement in current section
          let speed = 0.1;
          let radius = Math.min(getRelativeHorizontalSize(aboutSection, 25), 2);
          if (window.innerWidth < 960) {
            radius = 1.2;
          }
          if (window.innerWidth < 450) {
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
        }

        // Portfolio Headline Section
        if (cube.section.current == 2 && portfolioHeadlineSection != null) {
          // Parameters for arrangement in current section
          let horizontalExtend = Math.min(
            getRelativeHorizontalSize(portfolioHeadlineSection, 180),
            13
          );
          if (window.innerWidth < 450) {
            horizontalExtend = Math.min(
              getRelativeHorizontalSize(portfolioHeadlineSection, 200),
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
        }

        // Career Headline Section
        if (cube.section.current == 3 && careerHeadlineSection != null) {
          // Parameters for arrangement in current section
          let horizontalExtend = Math.min(
            getRelativeHorizontalSize(careerHeadlineSection, 180),
            13
          );
          if (window.innerWidth < 450) {
            horizontalExtend = Math.min(
              getRelativeHorizontalSize(careerHeadlineSection, 200),
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
          if (window.innerWidth < 960) {
            radius = 1.2;
          }
          if (window.innerWidth < 450) {
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
        }

        // Set target position for cube in current section
        cube.targetPosition.add(basePositions[cube.section.current]);

        // Set target rotation for cube in current section
        cube.targetRotation = baseRotations[cube.section.current];

        // Set target scale of cube in current section responsively
        cube.targetScale = baseScales[cube.section.current];
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
          letterContact={cube.letterContact}
        />
      ))}
    </>
  );
};

export default Cubes;
