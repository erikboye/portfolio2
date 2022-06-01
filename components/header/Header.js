import React from "react";
import { Wrapper, Nav, NavElmWrapper, NavItem, Logo } from "./header-style";

function Header() {
  const navList = [
    {
      id: "1",
      link: "#home",
      title: "Home",
    },
    {
      id: "2",
      link: "#portfolio",
      title: "Portfolio",
    },
    {
      id: "3",
      link: "#about",
      title: "About",
    },
  ];

  return (
    <Wrapper>
      <Nav>
        <Logo>Sørensen Design</Logo>
        <NavElmWrapper>
          {navList.map(({ id, link, title }) => (
            <NavItem key={id}>
              <a href={link} className="navElm">
                {title}
              </a>
            </NavItem>
          ))}
          ;
        </NavElmWrapper>
      </Nav>
    </Wrapper>
  );
}

export default Header;
