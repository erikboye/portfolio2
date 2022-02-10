import React from "react";
import styled from "styled-components";

const ProjectBanner = styled.div`
  width: 100%;
  padding: 300px 100px 0 100px;

  h2 {
    font-family: var(--font-bebas);
    font-size: var(--font-size-xxl);
    text-align: center;
    letter-spacing: 0.07em;
    width: 100%;
    color: var(--h1-hero);
  }

  p {
    font-family: var(--font-mont);
    font-size: var(--font-size-erik);
    text-align: center;
    letter-spacing: 0.07em;
    width: 42%;
    margin: auto;
    color: var(--h1-hero);
  }
`;

function MyProjects() {
  return (
    <ProjectBanner>
      <h2>MY PROJECTS</h2>
      <p>
        Hi. My name is Erik, I am a 28 year old Frontend Developer. Im located
        in Oslo, and been living here for the last 10 years.
      </p>
    </ProjectBanner>
  );
}

export default MyProjects;
