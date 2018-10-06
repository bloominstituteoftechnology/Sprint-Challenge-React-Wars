import React from 'react';
import './StarWars.css';
import FilmDisplay from './FilmDisplay';


const StarDisplay = (props) => {
	return (
	    <div>
	    	{props.starwarsChars.map((stars, i) => (
	    		<div>
	    			<h2> Name :  {stars.name} </h2>
			    	<p> Height  :  {stars.height} </p>
			    	<p> Mass  : {stars.mass} </p>
			    	<p> Hair-color  :  {stars.hair_color} </p>
				   	<p> Eye-color  :  {stars.eye_color} </p>
				   	<p> Birth-year  :  {stars.birth_year} </p>
				   	<p> Gender  :  {stars.gender} </p>
				   	<p> Homeworld  :  {stars.homeworld} </p>
				   	 
				   	<FilmDisplay props = {stars.films} />

				   	<p> Species  :  {stars.species} </p>
				   	<p> Vehicles  :  {stars.vehicles} </p>
				   	<p> Starships  :  {stars.starships} </p>
				   	<p> Created  :  {stars.created} </p>
				   	<p> Edited  :  {stars.edited} </p>
				   	<p> URL  :  {stars.url} </p>	
				</div>   
			))}	
		</div>  	
	);
}


export default StarDisplay;

