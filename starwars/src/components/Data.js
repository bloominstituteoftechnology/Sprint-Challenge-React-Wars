import React from 'react';
import './StarWars.css';
import Items from './Items';

function Data(props){
	return (
		<div className = 'Character'>
			{props.characters.map(character => <Items character={character}/>)}
		</div>
	);
}

export default Data;
