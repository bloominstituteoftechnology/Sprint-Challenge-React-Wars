import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Characters from './components/Characters';

const App = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then(res => {
        console.log(res.data.results);
        setCharacters(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='App'>
      <h1>testing</h1>
      <Characters characters={characters} />
    </div>
  );
};

export default App;
