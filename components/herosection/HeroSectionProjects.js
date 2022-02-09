import React from "react";
import styled from "styled-components";

const HeroBannerProjects = styled.div`
  width: 100%;
  padding: 150px 100px 0 100px;

  h1 {
    font-family: var(--font-bebas);
    font-size: var(--font-size-xxl);
    text-align: center;
    letter-spacing: 0.07em;
    width: 100%;
    color: var(--h1-hero);
    border: 2px solid lightgreen;
  }
`;

function HeroSectionProjects() {
  return (
    <HeroBannerProjects>
      <h1>MY PROJECTS</h1>
    </HeroBannerProjects>
  );
}

export default HeroSectionProjects;
