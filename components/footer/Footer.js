import React from "react";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const FooterBanner = styled.div`
  width: 100%;
  padding: 0 100px 0 0;
  border: 2px solid yellow;
  margin: auto;
`;

function Footer() {
  return (
    <FooterBanner>
      <h3>
        <FaInstagram />
        <FaGithub />
        <FaFacebookSquare />
        <FaLinkedin />
      </h3>
    </FooterBanner>
  );
}

export default Footer;
