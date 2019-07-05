import React from 'react';
import './StarWars.css';

const CharacterList = props => {
    return(
        <div className='allChars'>
            {props.list.map(character => 
                <div className='cards'>
                    <div> {character.name}, a {character.species} {character.species}, was born in the year of {character.birth_year} on the planet of {character.homeworld}.</div>
                    <div> {character.name} was created on {character.created}, later edited on {character.edited}.</div>
                    <div>Owning a total of {character.starships.length} starships and {character.vehicles.length} vehicles, {character.name} is sure a force to be reckoned with.</div>
                    <div>{character.name} has appeared in {character.films.length} Star Wars movies.</div>
                    {/* <div>Name: {character.name}</div>
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
                    <div>Mass: {character.mass}N</div>    
                    <div>Starships: {character.starships[0]}</div>
                    <div>Vehicles: {character.vehicles}</div>
                    <div>{character.films}</div> appearance */}
                </div>
            )}
        </div>
    )
}

export default CharacterList;