import React from 'react'

const Character = props => { 
    return (
        <div>
            <div onClick={props.returnToList}>Return to List</div>
            <h1>{props.character.name}</h1>
        </div>
    )
}

export default Character;