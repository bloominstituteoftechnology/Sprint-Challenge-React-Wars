import React from "react";
import './StarWars.css';

function Down(props){
	return (
		<button onClick={props.down} className={props.classes}>Down URL</button>
	);
}

export default Down;