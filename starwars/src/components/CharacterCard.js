import React from "react"
import Character from './Character'

const CharacterCard = props => {
    return(
        <div>
            {props.data.map(char => 
                <Character characterData={char} />
                )}
        </div>
    )
}

export default CharacterCard