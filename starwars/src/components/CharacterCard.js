import React from 'react'






function CharacterCard(props) {
console.log('props', props)





    return(

        <div>
            <img src={props.character.image} />
            <p>name: {props.character.name}</p>
            <p>height: {props.character.height}</p>
            <p>mass: {props.character.mass}</p>
            <p>gender: {props.character.gender}</p>
            <p>hair color: {props.character.hair_color}</p>           
            
        </div>
    )
}




export default CharacterCard