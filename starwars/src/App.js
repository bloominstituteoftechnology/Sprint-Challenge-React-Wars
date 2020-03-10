// Try to think through what state you'll need for this app before starting. Then build out
// the state properties here.

// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
// side effect in a component, you want to think about which state and/or props it should
// sync up with, if any.

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character'
import './App.css';

const App = () => {
	const apiKey = 'https://swapi.co/api/people/';
	const [ characters, setCharacters ] = useState([]);
	useEffect(() => {
		axios
			.get(apiKey)
			.then((response) => {
				setCharacters(Array.from(response.data.results));
			})
			.catch((err) => {});
	}, []);

  return (
		<div className="App">
			<h1 className="Header">React Wars</h1>
    {
      characters.map(character => {
        return(<Character character={character}/>)
      })
    }
		</div>
	);
};

export default App;
