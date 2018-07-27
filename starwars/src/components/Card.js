import React from "react";
import "./StarWars.css";

const Card = props => {
	return (
		<div className="card">
			<h4 className="card__header"> {props.character.name} </h4>

			<p> Born: {props.character.birth_year} </p>
			<p> Gender: {props.character.gender} </p>
			<p> Height: {props.character.height}</p>
            <p> Weight: {props.character.mass} </p>
			<p> Eye Color: {props.character.eye_color}</p>
			<p> Hair Color: {props.character.hair_color}</p>
			<p> Skin Color: {props.character.skin_color}</p>
		</div>
	);
};

export default Card;
