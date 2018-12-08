import React from 'react';
import './StarWars.css'

const DisplayCard = (props) => {
	return (
		<div className = "displayCard shake-crazy" >
			<h2>Name: {props.characterName}</h2>
			<h2>Birth year: {props.birthday}</h2>
			<h2>Mass: {props.mass}</h2>
			<h2>Height: {props.height}</h2>
		</div>
	)
}

export default DisplayCard