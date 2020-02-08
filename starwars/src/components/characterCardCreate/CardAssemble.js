import React from 'react'
import {CardContainer, Card} from './cardStyle'


const CardAssemble = props => {

console.log(props.character)
//assembling cards passing info through props
return(
<Card>
<h3>{props.character.name}</h3>
<p>Height: {props.character.height} </p>
<p>Mass: {props.character.mass} </p>
<p>Hair Color: {props.character.hair_color} </p>
<p>Skin Color: {props.character.skin_color} </p>
<p>Eye Color: {props.character.eye_color} </p>
<p>Gender: {props.character.gender} </p>

</Card>
)


}

export default CardAssemble;
