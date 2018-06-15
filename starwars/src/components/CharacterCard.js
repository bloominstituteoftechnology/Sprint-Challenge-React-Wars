import React from 'react'
import Eye from './Eye'
import './StarWars.css'

const CharacterCard = ({char})=> (
    <div className="character-card"> 
        <h1 className="character-name">{char ? char.name : 'Character Name'}</h1>
        <Eye color={char ? char.eye_color : 'black'} />
    </div>
)

export default CharacterCard