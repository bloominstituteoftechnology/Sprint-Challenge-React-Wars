import React from 'react'
import CurrentCharacter from './CurrentCharacter'


const CharacterList = props => { 
    return (
        <div>
            {props.chars.map((char, index) => {
                return <CurrentCharacter 
                char={char} 
                key={index} 
                CurrentCharacter={props.CurrentCharacter} />
            })}
        </div>
    )
}

export default CharacterList