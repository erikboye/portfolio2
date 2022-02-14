import React from "react";
import styled from "styled-components";
import Image from "next/Image";

const GetToKnowMe = styled.div`
  font-family: var(--font-mont);
  letter-spacing: 0.2em;
  padding: 200px 0 50px 0;
  width: 100%;
  color: var(--orange-color);
  text-align: center;
`;

function GTKM() {
  return (
    <GetToKnowMe>
      <p>GET TO KNOW ME</p>
      <Image src="/images/arrow.svg" alt="arrow" height={80} width={80} />
    </GetToKnowMe>
  );
}

export default GTKM;
