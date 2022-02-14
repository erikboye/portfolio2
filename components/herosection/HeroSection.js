import React from "react";
import styled from "styled-components";
// import media from "styled-media-query";

const HeroBanner = styled.div`
  width: 100%;
  padding: 150px 100px 0 100px;

  h3 {
    font-size: 2rem;
    font-family: var(--font-bebas);
    color: var(--h3-hero);
    text-align: center;
    height: 50px;
    width: 100%;
  }

  h1 {
    font-family: var(--font-bebas);
    font-size: var(--font-size-xl);
    text-align: center;
    letter-spacing: 0.06em;
    width: 100%;
    color: var(--h1-hero);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 400px) {
    h1 {
      font-size: 30px;
    }
  }
`;

function HeroSection() {
  return (
    <HeroBanner id="home">
      <h3>Hi, Im Erik.</h3>
      <h1>A freshly educated frontend developer.</h1>
    </HeroBanner>
  );
}

export default HeroSection;
