import styled from "styled-components";
import NavLinkItem from "./NavLinkItem";

const StyledNavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  position: absolute;
  top: 8rem;
  left: 0;
  right: 0;
  z-index: -100;

  background-color: #fff;
  padding: 0 1rem;

  transform: ${(props) =>
    props.open ? "translateY(0%)" : "translateY(calc(-100% - 8rem))"};
  transition: transform 0.5s ease-in;

  @media screen and (min-width: 768px) {
    flex-direction: row;

    position: static;
    padding: 0;
    z-index: 0;

    transform: translateX(0%);

    background-color: transparent;
  }
`;

const navObj = {
  ["why us?"]: "#",
  ["services"]: "#",
  ["about"]: "#",
  ["qfield"]: "#",
  ["blog"]: "#",
  ["contact"]: "#",
  ["english"]: "#",
};

function NavLinks({ open }) {
  return (
    <StyledNavLinks open={open}>
      {Object.entries(navObj).map((item, index) => {
        console.log(index);
        return (
          <NavLinkItem
            key={item[0]}
            animationDelay={index / 5 + 0.2}
            title={item[0]}
            url={item[1]}
            open={open}
          />
        );
      })}
    </StyledNavLinks>
  );
}

export default NavLinks;
