import React from 'react';
import './CharacterContainer.css';

const CharacterContainer = ({ chars }) => {
    return (
        <div>
            <h2>{chars.name}</h2>
            <h4>Stats</h4>
            <ul>
                <li>Birth Year: {chars.birth_year}</li>
                <li>Height: {chars.height}</li>
                <li>Mass: {chars.mass}</li>
                <li>Gender: {chars.gender}</li>
                <li>Hair Color: {chars.hair_color}</li>
                <li>Skin Color: {chars.skin_color}</li>
                <li>Home World {chars.homeworld}</li>
            </ul>
              
        </div>
    );
}
export default CharacterContainer;