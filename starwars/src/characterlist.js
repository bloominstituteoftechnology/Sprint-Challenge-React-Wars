import React from 'react'
import Character from './character'

const CharacterList = (props) => {
    return (
        <div>
        {props.characters.map((character, index) => {
            return <Character 
                character = {character}
                componentDidMount = {props.componentDidMount}
                getCharacters = {props.getCharacters}
                key = {index}
        />
    })}
    </div>
    );
}

export default CharacterList