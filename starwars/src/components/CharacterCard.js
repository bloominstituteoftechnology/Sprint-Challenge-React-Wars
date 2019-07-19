import React from 'react'


function CharacterCard(props) {
console.log('props', props)
    return(

        <div>
            <img src={props.character.image} />
            <p>name: {props.character.name}</p>
            <p>status: {props.character.status}</p>
        </div>
    )
}




export default CharacterCard