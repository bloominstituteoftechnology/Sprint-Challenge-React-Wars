import React from 'react';
import CharacterCards from './CharacterCards.js';
import Header from './Header.js';

const Characters = (props) => {
		return (
			<div className="characterCards">
			  <Header header= {props.header}/>
			  <CharacterCards
				birthYear = {props.birthYear}
				species = {props.species}
				gender = {props.gender}
				skinColor = {props.skinColor}
				eyeColor = {props.eyeColor}
				hairColor = {props.hairColor}
				height = {props.height}
				mass = {props.mass}
			  />
			</div>	
		);
}

export default Characters;