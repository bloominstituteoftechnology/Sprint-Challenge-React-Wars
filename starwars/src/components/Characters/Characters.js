import React from 'react';
import Character from './Character'
import './Characters.css'

const Characters = (props) => {
    return (
        <div className="character-list">
            {props.charData.map(character => {
                return <Character charData={character}/>
            })}   
        </div>
    )
}

export default Characters;