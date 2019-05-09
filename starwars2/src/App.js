import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import CharacterList from './CharacterList';

function App() {
  const [ starWarsChars, setStarWarsChars ] = useState([]);

  useEffect(() => {
    function fetchData() {
      const res = axios.get(
        `https://swapi.co/api/people`
      );
      res
        .then(res => {
          setStarWarsChars(res.data.results);
        })
        .catch(error => {
          console.log(error.message)
        })
    }
    if(starWarsChars.length === 0){
      fetchData();
    }
  });
  return (
    <div className="App-wars">
      <header className="header">
      React Wars
      </header>
      <CharacterList chars={starWarsChars}/>
    </div>
  );
}

export default App;
