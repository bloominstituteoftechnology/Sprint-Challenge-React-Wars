import React from 'react';
import './components/StarWars.css';

const Peep = props => {
	return (
		<div className='wars-container'>
			<h1 className='wars-details'>{props.name}</h1>
			<div>
				<p>Gender: {props.gender}</p>
				<p>Hair Color: {props.hair_color}</p>
				<p>Skin Color: {props.skin_color}</p>
				<p>Height: {props.height}</p>
				<p>Birth date: {props.birth_year}</p>
			</div>
		</div>
	);
};


export default Peep;