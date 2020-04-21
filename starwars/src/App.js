import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';
// import styled from 'styled-components';
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
    const [characters, setCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

    useEffect(() => {
        axios
            .get('https://swapi.py4e.com/api/people/')
            .then(resp => setCharacters(resp.data.results))
            .catch(err => console.log(err.message));
    }, []);

    return (
        <div className="App">
            <h1 className="Header">Starwars Characters</h1>
            {characters.map(s => (
                <Character key={s.url} characters={s} />
            ))}
        </div>
  );
}

export default App;
