import React from "react";
import './StarWars.css'

const CharacterCard = props => {
    return (
        <div className="character-card">
           {props.starwarsChar.data.results}
        </div>

    );
}


export default CharacterCard;