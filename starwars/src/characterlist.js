import React from 'react'
import Character from './character'

const CharacterList = (props) => {
    return (
        <div>
    {props.characters.map((character) => {
        return <Character 
        character = {character}
        componentDidMount = {props.componentDidMount}
        getCharacters = {props.getCharacters}

        />
    })}
    </div>
    );
}

export default CharacterList