import React from 'react'
import Character from './Character'

function Characters(props) {
    return (
        <div className="characters">
            {props.characterList.map((character, index) => 
                <Character characterData={props.characterList[index]}/>
            )}
        </div>
    )
}

export default Characters;