import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import CharacterComp from './components/Character';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')

    .then(response => {
      setCharacters(response.data.results)
    }) 
}, [])


  return (
    <div className='App'>
      <CharacterComp characterData={characters}/>
    </div >
  );
}

export default App;