import React from "react";
import './StarWars.css';

function Film(props){
	return (
		<li>{props.film}</li>
	);
}

export default Film;