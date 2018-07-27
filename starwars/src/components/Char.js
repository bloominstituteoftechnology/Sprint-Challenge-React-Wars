import React from "react";
import './StarWars.css';

const Char = props => {
    return (
        <div className="cardContainer">
            <p><strong>Name:</strong> {props.swchars.name}</p>
            <p><strong>Birth Year:</strong> {props.swchars.birth_year}</p>
            <p><strong>Eye Color:</strong> {props.swchars.eye_color}</p>
            {/* <p>{props.swchars.films}</p> */}
            <p><strong>Gender:</strong> {props.swchars.gender}</p>
            <p><strong>Hair Color:</strong> {props.swchars.hair_color}</p>
            <p><strong>Height:</strong> {props.swchars.height}</p>
            {/* <img src="{props.swchars.homeworld}" /> */}
            <p><strong>Mass:</strong> {props.swchars.mass}</p>
            <p><strong>Skin Color:</strong> {props.swchars.skin_color}</p>
        </div>
    );
}
export default Char;