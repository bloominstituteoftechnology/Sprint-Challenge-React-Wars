import React from "react";
import Characters from "./components/Characters";
import styled from "styled-components";
import "./App.scss";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const Container = styled.div`
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
  `;

  const Title = styled.h1`
    font-family: "Star Jedi", sans-serif;
    font-size: 3.5rem;
  `;

  return (
    <Container>
      <div className="App">
        <Title className="Header">React Wars</Title>
        <Characters />
      </div>
    </Container>
  );
};

export default App;
