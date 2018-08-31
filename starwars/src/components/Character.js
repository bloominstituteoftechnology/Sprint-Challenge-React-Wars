import React from 'react';
import './StarWars.css';

function Character(props) {
    return(
        <div className="Character">
            <div>
                <p className="charAttrib">Name: {props.character.name}</p>
            </div>

            <div>
                <p className="charAttrib">Height: {props.character.height}</p>
            </div>

            <div>
                <p className="charAttrib">Mass: {props.character.mass}</p>
            </div>

            <div>
                <p className="charAttrib">Hair color: {props.character.hair_color}</p>
            </div>

            <div>
                <p className="charAttrib">Skin color: {props.character.skin_color}</p>
            </div>

            <div>
                <p className="charAttrib">Eye color: {props.character.eye_color}</p>
            </div>

            <div>
                <p className="charAttrib">Birth year: {props.character.birth_year}</p>
            </div>

            <div>
                <p className="charAttrib">Gender: {props.character.gender}</p>
            </div>
        </div>
    );
};

export default Character;