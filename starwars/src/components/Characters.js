import React from "react";
import "./StarWars.css"

function Characters(props) {
    return (
        <div className="characters"> 
            <p>Name: {props.charactersInfo.name}</p>
            <p>Birth Year: {props.charactersInfo.birth_year}</p>
            <p>Gender: {props.charactersInfo.gender}</p>
            <p>Height: {props.charactersInfo.height}</p>
            <p>Mass: {props.charactersInfo.mass}</p>
        </div>
    )
}

export default Characters;