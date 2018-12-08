import React  from 'react'
import './StarWars.css'

import TraitList from './TraitList';

const CharacterCard = props=>{


    return(
        <div className="character-card">
            <h2>{props.character.name}</h2>
            <TraitList character={props.character}  />
        </div>
        
    )
}

export default CharacterCard;