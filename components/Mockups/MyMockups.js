import React from "react";
import styled from "styled-components";
import Image from "next/Image";

const MockupScreens = styled.div`
  align-items: center;
  width: 100%;
  padding: 150px 100px 0 100px;
  display: flex;
  flex-wrap: wrap;

  h2 {
    font-family: var(--font-bebas);
    font-size: var(--font-size-xxl);
    text-align: center;
    letter-spacing: 0.07em;
    width: 100%;
    color: var(--h1-hero);
  }

  p {
    color: white;
  }
`;

function Mockups() {
  return <MockupScreens></MockupScreens>;
}

export default Mockups;
