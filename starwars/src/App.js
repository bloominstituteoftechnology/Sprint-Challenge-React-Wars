import React from 'react';
import './App.css';
import Character from './Characters/Characters';
import styled from 'styled-components'
import PAG from './Pag';

const BC = styled.li`
color: dodgerblue;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Rick and Morty Full Cast</h1>
      <BC><Character/></BC>
      <PAG/>
    </div>
  );
}

export default App;
