import React from 'react';
import './StarWars.css';

const StarDisplay = (props) => {
	return (
	    <div>
	    	{props.starwarsChars.map(stars, i => (
	    		
	    		<div>	
						<h1>Name : {stars[i].name} </h1>
			    		<p>Height  : {stars[i].height} </p>
			    		<p>Mass  : {stars[i].mass} </p>
			    		<p>Hair-color  : {stars[i].hair_color} </p>
				    	<p>Eye-color  : {stars[i].eye_color} </p>
				    	<p>Birth-year  : {stars[i].birth_year} </p>
				    	<p>Gender  : {stars[i].gender} </p>
				    	<p>Homeworld  : {stars[i].homeworld} </p>
				    	<p>Films  : {stars[i].films} </p>
				    	<p>Species  : {stars[i].species} </p>
				    	<p>Vehicles  : {stars[i].vehicles} </p>
				    	<p>Starships  : {stars[i].starships} </p>
				    	<p>Created  : {stars[i].created} </p>
				    	<p>Edited  : {stars[i].edited} </p>
				    	<p>URL  : {stars[i].url} </p>
			   	</div>   

			))}
		</div>  	
	);
}


export default StarDisplay;