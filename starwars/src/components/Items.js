import React from 'react';
import './StarWars.css';

function Items(props){
	const{name,birth_year,gender,eye_color,skin_color,height,mass} = props.character;

	return(
		<div className = 'card'>
			<h1>Name:{name}</h1>
			<h2>Gender: {gender}</h2>
			<h2>Birth Year: {birth_year}</h2>
			<h2>Height: {height}</h2>
			<h2>Mass: {mass}</h2>
			<h2>Skin Color: {skin_color}</h2>
			<h2>Eye Color: {eye_color}</h2>
		</div>
	);
}

export default Items;
