import "./App.css";
import React from "react";

import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import styled from "styled-components";
import Footer from "./components/Footer/Footer";

const StyledBody = styled.body`
  background: grey;
  height: 100%;
`;

function App() {
  return (
    <StyledBody>
      <Header />
      <Navigation />
      <Footer />
    </StyledBody>
  );
}

export default App;
