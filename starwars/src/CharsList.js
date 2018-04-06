import React from 'react';
import { FilmsList } from './FilmsList';
import { VehiclesList } from './VehiclesList';
import { StarshipsList } from './StarshipsList';

const CharsList = props => {
    return (
    <div>{props.starwarsChars.map(character => (
        <div key={character.mass}>
            <ul><h3>{`${character.name}`}</h3></ul>
            <ul>{`Height: ${character.height}`}</ul>
            <ul>{`Mass: ${character.mass}`}</ul>
            <ul>{`Hair_Color: ${character.hair_color}`}</ul>
            <ul>{`Skin_Color: ${character.skin_color}`}</ul>
            <ul>{`Eye_Color: ${character.eye_color}`}</ul>
            <ul>{`Birth_Year: ${character.birth_year}`}</ul>
            <ul>{`Gender: ${character.gender}`}</ul>
            <ul>{`Homeworld: ${character.homeworld}`}</ul>
            <ul>{`Species: ${character.species}`}</ul>
            <ul>{`Created: ${character.created}`}</ul>
            <ul>{`Edited: ${character.edited}`}</ul>
            <ul>{`URL: ${character.url}`}</ul>
            </div>
    ))}
    </div>
    );
};

export default CharsList