import React from 'react';
import './StarWars.css';

const RWarCell = (props) => {
	const {
		name,
		birth_year,
		gender,
		height,
		hair_color,
		eye_color,
		skin_color,
	} = props.character;

	return (
		<section className="rwar-cell">
			<h1 className="list-header">{name}</h1>
			<div className="list-content">
				<p>Birthday: {birth_year}</p>
				<p>Gender: {gender}</p>
				<p>Height: {height}</p>
				<p>Hair Color: {hair_color}</p>
				<p>Eye Color: {eye_color}</p>
				<p>Complexion: {skin_color}</p>
			</div>
		</section>
	);
};

export default RWarCell;
