import React from 'react';

const CharacterCard = props => {
	return (
		<div className="card-container">
			<p>Birth Year: {props.birthYear}</p>
			<p>Gender: {props.gender}</p>
			<p>Mass: {props.mass}</p>
			<p>Height: {props.height}</p>
		</div>
	);
}

export default CharacterCard;