import styled from "styled-components";
import Logo from "./Logo";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { useState } from "react";
import NavLinks from "./NavLinks";

const StyledNavbar = styled.nav`
  padding: 0 2rem 0 1rem;
  background-color: #fff;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 8rem;

  @media screen and (min-width: 768px) {
    background-color: #fff;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const MenuIcon = styled.button`
  display: flex;
  align-items: center;

  font-size: 2.8rem;
  color: var(--color-grey-500);
  background-color: inherit;
  border: none;

  & svg {
    cursor: pointer;
    transition: color 0.3s;
  }

  & svg:hover {
    color: var(--color-brand-500);
  }

  @media screen and (min-width: 768px) {
    & {
      display: none;
    }
  }
`;

const SmallScreenNavContainer = styled.div`
  flex: 1;
  z-index: 1000;
  background-color: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    background-color: transparent;
  }
`;

function Navbar() {
  const [isMenuOpened, setIsmenuOpened] = useState(false);
  return (
    <>
      <StyledNavbar>
        <ContentContainer>
          <SmallScreenNavContainer>
            <Logo />
            <MenuIcon onClick={() => setIsmenuOpened((pre) => !pre)}>
              {isMenuOpened ? <HiXMark /> : <HiBars3 />}
            </MenuIcon>
          </SmallScreenNavContainer>
          <NavLinks open={isMenuOpened} />
        </ContentContainer>
      </StyledNavbar>
    </>
  );
}

export default Navbar;
