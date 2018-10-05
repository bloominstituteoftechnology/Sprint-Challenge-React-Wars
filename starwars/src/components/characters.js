import React from "react";
import "./StarWars.css";

const Character = props => {
    return (
        <div className="card">
            <h1>Name: {props.char.name}</h1>
            <p>Birth Year: {props.char.birth_year}</p>
            <p>Gender: {props.char.gender}</p>
            <p>Number of Appearances: {props.char.films.length}</p>
        </div>
    );
}

export default Character;