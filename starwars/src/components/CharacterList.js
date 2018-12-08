import React from 'react';
import './StarWars.css';
import Character from './Character';

function CharacterList(props) {
    return(
        <div className="CharacterList">
            {props.characters.map(character => (
                <Character
                    key = {character.name}
                    name = {character.name}
                    height = {character.height}
                    mass = {character.mass}
                    hair_color = {character.hair_color}
                    skin_color = {character.skin_color}
                    eye_color = {character.eye_color}
                    birth_year = {character.birth_year}
                    gender = {character.gender}
                    character = {character}
                />
            ))}
        </div>
    );
  };


export default CharacterList;