import React from 'react';
import styled from "styled-components";
import './App.css';
import './components/CharacterList';
import CharacterList from './components/CharacterList';

const Container = styled.div `
display: flex;
justify-content: center;
`


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Container className="container"> 
        <CharacterList/>
      </Container>
    </div>
  );
}

export default App;
