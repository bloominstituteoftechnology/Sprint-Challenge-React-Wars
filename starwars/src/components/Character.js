import React from 'react';
import './StarWars.css';

const Character = props => {
    return (
        <div className="card">
            <h2>{props.char.name}</h2>
                <ul>
                    <li>{props.char.birth_year}</li>
                    <li>{props.char.eye_color}</li>
                    <li>{props.char.gender}</li>
                    <li>{props.char.hair_color}</li>
                    <li>{props.char.height}</li>
                    <li>{props.char.mass}</li>
                    <li>{props.char.skin_color}</li>
                </ul>
        </div>
    )
};
export default Character;


//props.char char attribute from Character comp