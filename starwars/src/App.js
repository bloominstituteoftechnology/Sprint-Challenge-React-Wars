import React, { useState } from "react";
import Characters from "./components/Characters";
import PageButton from "./components/PageButton";
import styled from "styled-components";
import "./App.scss";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [pageNumber, setPageNumber] = useState(1);

  const Container = styled.div`
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
  `;

  const Title = styled.h1`
    font-family: "Star Jedi", sans-serif;
    font-size: 3.5rem;
    margin: 1.5rem 0;
  `;

  return (
    <Container>
      <div className="App">
        <Title className="Header">React Wars</Title>
        <Characters pageNumber={pageNumber} />
        <PageButton pageNumber={pageNumber} setPageNumber={setPageNumber} />
      </div>
    </Container>
  );
};

export default App;
