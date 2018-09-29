import React from 'react'
import Character from './Character'
import styles from './StarWars.css'

const CharacterList = props =>{
    return(
        <div>
            {props.starwarsChars.map(character=>{
                return(
                    <Character key = "character.value" character = {character} />
                )
            })}
        </div>
    )
}

export default CharacterList;