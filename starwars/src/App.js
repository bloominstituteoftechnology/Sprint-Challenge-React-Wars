import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Characters from './components/Character';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then(res => setCharacters(res.data.results))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='App'>
      <Characters characters={characters} />
    </div>
  );
}

export default App;
