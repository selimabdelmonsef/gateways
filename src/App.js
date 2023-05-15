import styled from "styled-components";
import "./App.css";
import GatewaysPage from "./pages/GatewaysPage/GatewaysPage";

const StyledHomePage = styled.div({
  textAlign: "center",
});
function App() {
  return (
    <StyledHomePage className="App">
      <div className="mt-2 mb-4">GATEWAYS</div>
      <GatewaysPage />
    </StyledHomePage>
  );
}

export default App;
