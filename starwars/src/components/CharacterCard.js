import React from 'react'
import './characterCard.scss'
import { Card } from 'semantic-ui-react'






function CharacterCard(props) {
console.log('props', props)





    return(

        <Card className="card">
            <img src={props.character.image} />
            <p>name: {props.character.name}</p>
            <p>height: {props.character.height}</p>
            <p>mass: {props.character.mass}</p>
            <p>gender: {props.character.gender}</p>
            <p>hair color: {props.character.hair_color}</p>           
            
        </Card>
    )
}




export default CharacterCard