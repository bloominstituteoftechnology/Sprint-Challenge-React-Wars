import React from 'react'
import './StarWars.css'

const CharacterCard = ({char})=> (
    <div className="character-card">
        
        <h1 className="character-name">{char ? char.name : 'Character Name'}</h1>
    </div>
)

export default CharacterCard