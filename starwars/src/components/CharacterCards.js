import React from 'react';


const CharacterCards = (props) => {
	return (
		<div>
			<p>Birth Year: {props.birthYear}</p>
			<p>Species: {props.species}</p>
			<p>Gender: {props.gender}</p>
			<p>Skin Color: {props.skinColor}</p>
			<p>Eye Color: {props.eyeColor}</p>
			<p>Hair Color: {props.hairColor}</p>
			<p>Height: {props.height}</p>
			<p>Mass: {props.mass}</p>
		</div>
	);
	
}


export default CharacterCards;