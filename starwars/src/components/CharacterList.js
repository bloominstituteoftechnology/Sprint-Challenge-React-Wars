import React from 'react';
import './StarWars.css';

const CharacterList = props => {
    return(
        <div className='allChars'>
            {props.list.map(character => 
                <div className='cards'>
                    <div>Name: {character.name}</div>
                    <div>Species: {character.species}</div>
                    <div>Birth Year: {character.birth_year}</div>
                    <div>Gender: {character.gender}</div>
                    <div>Homeworld: {character.homeworld}</div>
                    <div>Created: {character.created}</div>
                    <div>Edited {character.edited}</div>
                    <div>Skin Color: {character.skin_color}</div>
                    <div>Hair Color: {character.hair_color}</div>
                    <div>Eye Color: {character.eye_color}</div>
                    <div>Height: {character.height}cm</div>
                    <div>Mass: {character.mass}</div>    
                    <div>Starships: {character.starships}</div>
                    <div>Vehicles: {character.vehicles}</div>
                    {/* <div>{character.films[3]}</div> appearance */} 
                </div>
            )}
        </div>
    )
}

export default CharacterList;