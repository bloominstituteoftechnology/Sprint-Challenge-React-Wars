import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // * * * STATE PROPERTIES

  // * * * USE EFFECT

  const [selection, setSelection] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.co/api/people')
    .then(response => {
      console.dir(response.data);
    })
    .catch(error => {
      console.log('Data not returned', error);
    });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
