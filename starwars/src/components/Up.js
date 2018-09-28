import React from "react";
import './StarWars.css';

function Up(props){
	return (
		<button onClick={props.up} className={props.classes2}>Next Page</button>
	);
}

export default Up
