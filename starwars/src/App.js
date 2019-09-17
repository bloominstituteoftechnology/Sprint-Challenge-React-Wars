import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CharacterGrid from './components/Grid';
import './App.css';

const App = () => {

  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      
      <CharacterGrid />
    </div>
  );
}

export default App;


