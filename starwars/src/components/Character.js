import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from '../CharacterCard';

export default function Character(props) {
	const [ characterData, setCharacterData ] = useState([]);

	useEffect(() => {
		axios
			.get('https://swapi.co/api/people/')
			.then((response) => {
				setCharacterData(response.data.results);
				console.log(response.data.results[0]);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<div>
			{characterData.map((attr) => {
				return <CharacterCard attr={attr} />;
			})}
		</div>
	);
}
