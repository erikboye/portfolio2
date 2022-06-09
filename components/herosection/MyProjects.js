import React from "react";
import styled from "styled-components";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const ProjectBanner = styled.div`
  width: 100%;
  padding-top: 200px;
  text-align: center;

  h2 {
    font-family: var(--font-bebas);
    font-size: var(--font-size-xxl);
    text-align: center;
    letter-spacing: 0.07em;
    width: 100%;
    color: var(--h1-hero);
  }

  p {
    color: var(--orange-color);
    font-size: var(--font-size-md);
    letter-spacing: 0.1em;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: var(--font-size-lg);
    }

    p {
      font-size: var(--font-size-md);
    }
  }
  @media (max-width: 400px) {
  }
`;

function MyProjects() {
  return (
    <ProjectBanner id="portfolio">
      <h2>MY PROJECTS</h2>
      <p>
        In these projects, my skills like <FaHtml5 />
        <FaCss3Alt />
        <FaReact />
        <FaJsSquare />
        <FaFigma />
        <FaWordpress />
        <FaGithubSquare /> has been used
      </p>
    </ProjectBanner>
  );
}

export default MyProjects;
