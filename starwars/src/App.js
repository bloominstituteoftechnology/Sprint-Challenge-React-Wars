import React from 'react';
import './App.css';
import StarWarsCharacters from './components/StarWarsCharactersList';
import styled from 'styled-components';

const Header = styled.h1`
padding:6px 10px;
margin: 5px;
border: none;
border-radius:1px;
color: blue;
text-align: center;`

const App = () => {
  return (
    <div>
      <Header>React Wars</Header>
      <StarWarsCharacters/>
      </div>
  );
}

export default App;
 // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.