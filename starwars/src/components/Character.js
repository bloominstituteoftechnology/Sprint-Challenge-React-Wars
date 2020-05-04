import React from 'react';
    import './StarWars.css';
    import 'https://swapi.py4e.com/api/people/1/';
	//import luke from './.jpg';
	import c3po from './images/c3po.jpg';
	//import beru from './beru.jpg';
	//import biggs from './biggs.jpg';
	//import leia from './leia.jpg';
	//import owen from './owen.jpg';
	//import r2d2 from './r2d2.jpg';
	import vader from './images/vader.jpg';
	//import r5d4 from './r5d4.jpg';
	//import obiwan from './obiwan.jpg';
	

	// create component that renders an individual character's properties
	const Character = (props) => {
	    // array of imported pics
	    let pics = [c3po, vader];
	        	   
	    return (
	        <div className="character">
	            <h2>{props.character.name}</h2>
	            <img src={pics[props.id]} />
	            <ul>
	                <li>Gender: {props.character.gender}</li>
	                <li>Height: {props.character.height}</li>
	                <li>Mass  : {props.character.mass}</li>
	            </ul>
	        </div>
	    );
	}
	

	export default Character;