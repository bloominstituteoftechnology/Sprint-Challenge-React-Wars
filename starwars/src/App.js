import React from 'react';
import './App.css';
import CharacterList from "./components/CharacterList";
import styled from "styled-components";

const Header = styled.h1`
font-size: 120px;
margin-top: 10px;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <Header>Star Wars Characters</Header>
      <h4>partial list</h4>
      <CharacterList />
    </div>
  );
};

export default App;
