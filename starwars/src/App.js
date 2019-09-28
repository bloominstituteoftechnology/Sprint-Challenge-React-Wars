import React from 'react';
import './App.css';
import TestCard from './components/TestCard'
import { Container } from 'semantic-ui-react'
import Name from './components/Name'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <Container >
        <Name/>

      {/* <h1 className="Header">React Wars</h1>
      <TestCard />
      <TestCard2 /> */}

      </Container>
    </div>
  );
}

export default App;
