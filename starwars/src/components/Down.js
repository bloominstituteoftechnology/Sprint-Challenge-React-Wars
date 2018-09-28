import React from "react";
import './StarWars.css';

function Down(props){
	return (
		<button onClick={props.down} className={props.classes}>Last Page</button>
	);
}

export default Down;