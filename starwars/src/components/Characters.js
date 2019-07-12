import React from 'react'
import Character from './Character'

const Characters = props => {
    return (
        <div>
            {console.log(props.characters)}
            {props.characters.map(character => <Character character={character} />)}
        </div>
    )
}

export default Characters