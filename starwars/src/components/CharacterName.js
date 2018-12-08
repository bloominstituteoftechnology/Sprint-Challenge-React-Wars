import React from 'react'

const CharacterName = (props) => {
    return(
        <div className = "character-name">
            {props.data.map(character => character.name)}
        </div>
    )
}

export default CharacterName;