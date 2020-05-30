import React from 'react';
    import './StarWars.css';
    import 'https://swapi.py4e.com/api/people/1/';

	const Character = (props) => {


	    return (
	        <div className="character">
	            <h2>{props.character.name}</h2>
	            <img src={pics[props.id]} />
	            <ul>
	                <li>Height: {props.character.height}</li>
	                <li>Mass  : {props.character.mass}</li>
					<li>Gender: {props.character.gender}</li>
	            </ul>
	        </div>
	    );
	}
	

	export default Character;