import React from "react";
import styled from "styled-components";

const MeSection = styled.div`
  h1 {
    font-family: var(--font-bebas);
    font-size: var(--font-size-xl);
    text-align: center;
    letter-spacing: 0.06em;
    width: 100%;
    color: var(--h1-hero);
    margin-top: 200px;
  }
`;

function AboutMe() {
  return (
    <MeSection>
      <h1>HEY, YOU!</h1>
    </MeSection>
  );
}

export default AboutMe;
