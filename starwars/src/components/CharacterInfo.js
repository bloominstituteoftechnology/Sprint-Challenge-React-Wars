import React from 'react'

const CharacterInfo = (props) => {
    return (
        <div>
            <h1>{props.character.name}</h1>
            <h3>{props.character.height}</h3>
            <h3>{props.character.mass}</h3>

        </div>
    )
}

export default CharacterInfo