import React from "react";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const FooterBanner = styled.div`
  width: 50%;
  padding: 50px 0 20px 0;
  text-align: center;
  margin: auto;

  .FooterIcons {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    color: var(--orange-color);
    margin: auto;
  }
`;

function Footer() {
  return (
    <FooterBanner>
      <h3 className="FooterIcons">
        <FaInstagram />
        <FaGithub />
        <FaFacebookSquare />
        <FaLinkedin />
      </h3>
    </FooterBanner>
  );
}

export default Footer;
