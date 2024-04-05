import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Navbar from "./ui/Navbar";

const StyledApp = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  z-index: 100;
`;

function App() {
  return (
    <StyledApp>
      <GlobalStyles />
      <Navbar />
    </StyledApp>
  );
}

export default App;
