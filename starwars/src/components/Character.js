import React from 'react';
import './StarWars.css'

const Character = props => {
    return (
        <div className="character">
            <div className="profile">
                <h2>{props.character.name}</h2>
            </div>
            <div className="details">
                <ul>
                    <li>Birth Year: {props.character.birth_year}</li>
                    <li>Eye Color: {props.character.eye_color}</li>
                    <li>Hair Color: {props.character.hair_color}</li>
                    <li>Skin Color: {props.character.skin_color}</li>
                    {/* <ul>Ships: {props.character.starships.map(ship => {
                        return <li>{ship}</li>
                    })}</ul> */}
                </ul>
            </div>
        </div>
    );
}

export default Character;