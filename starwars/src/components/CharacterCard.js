import React from 'react';

const CharacterCard = props => {
	return (
		<div>
			<p>Name: {props.name}</p>
			<p>Birth Year: {props.birthYear}</p>
			<p>Gender: {props.gender}</p>
			<p>Mass: {props.mass}</p>
		</div>
	);
}

export default CharacterCard;