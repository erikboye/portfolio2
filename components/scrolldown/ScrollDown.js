import React from "react";
import styled from "styled-components";
import Image from "next/Image";

const ScrollDownContainer = styled.div`
  font-family: var(--font-mont);
  letter-spacing: 0.2em;
  margin-top: 320px;
  padding: 50px 0 50px 0;
  width: 100%;
  color: var(--orange-color);
  text-align: center;
`;

function ScrollDown() {
  return (
    <ScrollDownContainer>
      <p>SCROLL DOWN</p>
      <img src="/images/arrow.svg" alt="arrow" height={80} width={80} />
    </ScrollDownContainer>
  );
}

export default ScrollDown;
