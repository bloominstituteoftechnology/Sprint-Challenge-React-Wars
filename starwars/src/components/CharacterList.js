import React from "react";
import Character from "./Character";

import "./StarWars.css";

const CharacterList = props => {
    return props.list.map(character => { 
        return (
            <div className = "characterCard">
            <Character 
                name = {character.name}
                birthYear = {character.birth_year}
                eyeColor = {character.eye_color}
                hair = {character.hair_color}
                height = {character.height}
                mass = {character.mass}
                created = {character.created}
                edited = {character.edited}
                gender = {character.gender}
                homeworld = {character.homeworld}
                />
            </div>
        ) 
    })
}

export default CharacterList; 