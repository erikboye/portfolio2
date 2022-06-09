import React from "react";
import styled from "styled-components";

const HeroBanner = styled.div`
  width: 100%;
  padding-top: 150px;

  h3 {
    font-size: 4rem;
    font-family: var(--font-bebas);
    color: var(--h3-hero);
    text-align: center;
    height: 80px;
    width: 100%;
  }

  h1 {
    font-family: var(--font-bebas);
    font-size: var(--font-size-xl);
    text-align: center;
    letter-spacing: 0.1em;
    width: 100%;
    color: var(--h1-hero);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 400px) {
    h1 {
      font-size: 30px;
      margin-top: 30px;
      margin: auto;
    }
  }
`;

function HeroSection() {
  return (
    <HeroBanner id="home">
      <h3>Hi, Im Erik.</h3>
      <h1>A frontend developer!</h1>
    </HeroBanner>
  );
}

export default HeroSection;
