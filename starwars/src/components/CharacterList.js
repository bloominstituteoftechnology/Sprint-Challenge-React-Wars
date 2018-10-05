import React from 'react'
import Character from './Character'

const CharacterList = props =>{
    return(
        <div>
            {props.starwarsChars.map(chars => (
                <Character
                    starwarsChars = {chars}
                />
            ))}
        </div>
    )
}

export default CharacterList;