import styled from "styled-components";

const StyledNavLinkItem = styled.li`
  @keyframes linkFade {
    from {
      opacity: 0;
      transform: translateX(100px);
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  font-size: 1.2rem;
  text-transform: uppercase;
  list-style-type: none;
  padding-left: 3rem;
  animation: ${({ open, animationdelay }) =>
    open ? `linkFade 0.5s ease ${animationdelay}s 1 normal` : "none"};

  &:first-child {
    margin-top: 3rem;
  }

  &:last-child {
    margin-bottom: 2rem;
  }

  & a {
    text-decoration: none;
    color: var(--color-grey-600);
    cursor: pointer;

    transition: color 0.3s;
  }

  &:hover a {
    color: var(--color-brand-500);
  }

  @media screen and (min-width: 768px) {
    & {
      padding-left: 0;
      animation: none;
    }

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

function NavLinkItem({ url, title, animationDelay, open }) {
  console.log(animationDelay);
  return (
    <StyledNavLinkItem animationdelay={animationDelay} open={open}>
      <a href={url}>{title}</a>
    </StyledNavLinkItem>
  );
}

export default NavLinkItem;
