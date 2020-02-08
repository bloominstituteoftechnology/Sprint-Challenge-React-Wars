import React from 'react'
import CardAssemble from "./CardAssemble"
import {CardContainer, Card} from './cardStyle'


const CardCreate = props => {

console.log(props.character)
return(
  <CardContainer>
  {props.character.map(character =>{
    return(
      <CardAssemble character = {character}/>
    )
  })}
  </CardContainer>
)


}

export default CardCreate;
// return (
// <CardContainer>
// {props.character.map(character =>{
//
// return(  <Card>
//   <h1>{character.name}</h1>
//   <Card/>;
// )
//
// })}
// </CardContainer>
// )
