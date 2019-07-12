import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [character, setCharacter] = useState();

  useEffect(() => {
    axios
      .get('https://swapi.co/api/people')
      .then(res => console.log(res.data.results))
      .catch(err => console.log(err));
  }, []);

  return <div className='App' />;
}

export default App;
