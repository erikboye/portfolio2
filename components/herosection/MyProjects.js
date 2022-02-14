import React from "react";
import styled from "styled-components";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";

const ProjectBanner = styled.div`
  width: 100%;
  padding: 300px 100px 0 100px;
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
  }
`;

function MyProjects() {
  return (
    <ProjectBanner>
      <h2>MY PROJECTS</h2>
      <p>
        In these projects, my skills like <FaHtml5 />
        <FaCss3Alt />
        <FaReact />
        <FaJsSquare /> has been used
      </p>
    </ProjectBanner>
  );
}

export default MyProjects;
