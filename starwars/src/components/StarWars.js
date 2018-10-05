import React from "react";
import './StarWars.css';

const StarWars = props => (
    <div>
    {props.characters.map(character => (
    <h2>{character.name}</h2>
    
    )
    )}
    </div>
)

export default StarWars