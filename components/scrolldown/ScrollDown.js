import React from "react";
import styled from "styled-components";
import Image from "next/Image";

const ScrollDownContainer = styled.div`
  font-family: var(--font-mont);
  letter-spacing: 0.2em;
  margin-top: 250px;
  padding: 50px 0 50px 0;
  width: 100%;
  color: var(--orange-color);
  text-align: center;
  border: 2px solid lightblue;
`;

function ScrollDown() {
  return (
    <ScrollDownContainer>
      <p>SCROLL DOWN</p>
      <Image
        src="/images/arrow.svg"
        alt="arrow"
        font-weight=""
        height={50}
        width={80}
      ></Image>
    </ScrollDownContainer>
  );
}

export default ScrollDown;
