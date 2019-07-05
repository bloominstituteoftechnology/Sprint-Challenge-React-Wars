import React from "react";
import './StarWars.css';

const Characters = props => {
    return (
        <div className="card">
            <h2 className="card_header">{props.char.name}</h2>
            
            <div className="card_content">
                <h3 className="charDOB">Date of birth: {props.char.birth_year}</h3>
                <h3 className="charSex">{props.char.gender}</h3>

                <div className="card-content_info">
                    <ul>
                   <li> Species: {props.char.species}</li>
                   <li>From: {props.char.homeworld}</li>
                   <li>Ship(s): {props.char.starships}</li>

                    <li>Skin: {props.char.skin_color}</li>    
                    <li>Eye color: {props.char.eye_color}</li>
                    <li>Hair: {props.char.hair_color}</li>
                    <li>Mass: {props.char.mass}</li>
                    <li>Vehicle(s): {props.char.vehicles}</li>
                    </ul>
                </div>

                <h3 className="charMovies">Featured in: {props.char.films}</h3>
            </div> 
        </div>
    );
};

export default Characters;