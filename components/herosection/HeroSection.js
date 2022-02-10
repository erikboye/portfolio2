import React from "react";
import styled from "styled-components";

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
    font-size: var(--font-size-xxl);
    text-align: center;
    letter-spacing: 0.07em;
    width: 100%;
    color: var(--h1-hero);
  }
`;

function HeroSection() {
  return (
    <HeroBanner>
      <h3>HELLO, WORLD.</h3>
      <h1>IM A FRONTEND DEVELOPER.</h1>
    </HeroBanner>
  );
}

export default HeroSection;
