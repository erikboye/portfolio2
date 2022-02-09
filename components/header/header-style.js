import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  flex: 0 0 80px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.p`
  font-family: var(--font-bebas);
  font-size: 50px;
  letter-spacing: 0.15em;
  color: var(--logo-color);
`;

export const Nav = styled.nav`
  display: flex;
  width: 25%;
  justify-content: space-between;
  flex-direction: row;
`;

export const NavItem = styled.div`
  text-transform: uppercase;
  font-size: 18px;
  font-family: var(--font-headings);
  color: var(--orange-color);

  a {
    text-decoration: none;
    font-weight: 400;
  }
`;
