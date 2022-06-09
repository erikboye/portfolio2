import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  flex: 0 0 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.p`
  font-family: var(--font-bebas);
  font-size: 3rem;
  letter-spacing: 0.1em;
  color: var(--logo-color);
  margin: 0;

     @media (max-width: 991px) {
  {
    font-size: 24px;
  };
`;

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;

export const NavElmWrapper = styled.ul`
  display: flex;
  width: 55%;
  justify-content: space-between;

  @media (max-width: 991px) {
  {
    width: 100%;

  };

  @media (max-width: 455px) {
  {
  display: none;

  };
`;

export const NavItem = styled.div`
  text-transform: uppercase;
  font-size: 18px;
  font-family: var(--font-headings);
  color: var(--orange-color);



  a {
    text-decoration: none;
    font-weight: 400;


    @media (max-width: 991px) {
  {
    font-size: 14px;
    display: flex;
  };
  }
`;
