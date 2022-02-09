import React from "react";
import { Wrapper, Nav, NavItem, Logo } from "./header-style";

function Header() {
  const navList = [
    {
      link: "#about",
      title: "About",
    },
    {
      link: "#portfolio",
      title: "Portfolio",
    },
    {
      link: "#Contact",
      title: "Contact",
    },
  ];

  return (
    <Wrapper>
      <Logo>EBS</Logo>
      <Nav>
        {navList.map(({ link, title }) => (
          <NavItem key={link}>
            <a href={link}>{title}</a>
          </NavItem>
        ))}
      </Nav>
    </Wrapper>
  );
}

export default Header;
