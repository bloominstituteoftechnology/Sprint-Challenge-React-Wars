import React from 'react';
import './App.css';
import styled from 'styled-components'
import CharList  from './components/CharList';

const TheApp = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

`;


const Title= styled.h1`
  color: #FFE81F;
  text-shadow: 2px 2px 3px #fff;
  font-size: 4.5rem;
  background-color: #000000;

`;


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <TheApp className="App">
      <Title >React Wars</Title>
      <CharList/>
    </TheApp>
  );
}

export default App;
