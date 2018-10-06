import React from 'react';


const CharacterCards = (props) => {
	return (
		<div className="cardsContainer">
			<p><strong>Birth Year:</strong> {props.birthYear}</p>
			<p><strong>Gender:</strong> {props.gender}</p>
			<p><strong>Skin Color:</strong> {props.skinColor}</p>
			<p><strong>Eye Color:</strong> {props.eyeColor}</p>
			<p><strong>Hair Color:</strong> {props.hairColor}</p>
			<p><strong>Height:</strong> {props.height}</p>
			<p><strong>Mass:</strong> {props.mass}</p>
		</div>
	);
	
}


export default CharacterCards;