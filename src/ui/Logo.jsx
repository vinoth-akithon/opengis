import styled from "styled-components";

const Img = styled.img`
  width: auto;
  height: 8rem;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

function Logo() {
  return (
    <Img
      src="https://i0.wp.com/www.opengis.ch/wp-content/uploads/2024/03/logo_opengisch_open-source-geoninjas.png?fit=1824%2C671&ssl=1"
      alt="logo"
    />
  );
}

export default Logo;
