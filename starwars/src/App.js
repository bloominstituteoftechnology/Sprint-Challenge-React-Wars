import React from 'react';
import './App.css';
import { Jumbotron, Container } from 'reactstrap'
import List from './components/List'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  return (
    <div className="App">
      <Jumbotron style={{width: '75%', margin: '5% auto', backgroundColor: "rgba(0, 19, 151, 0.3)", boxShadow: '0px 5px 10px 5px rgba(0, 0, 0, 0.5)'}}>
          <h1 className="display-2" style={{color: 'white'}}>React Wars</h1>
          <p className="lead" style={{color: 'white'}}>A small React app to fetch and display Star Wars characters from SWAPI.</p>
      </Jumbotron>
      <Container>
        <List />
      </Container>
    </div>
  );
}

export default App;
