import React from 'react';
import styled from 'styled-components';
import './App.css';
import StarList from './StarList';


const BorderDiv = styled.div`
border: 1px solid black;
border-radius: 12px;
`;

const FontStyle = styled.h3`
font-family: 'Courier New', Courier, monospace;
color: red;
`;


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <FontStyle>
      <StarList />
        </FontStyle>
    </div>
  );
}

export default App;
