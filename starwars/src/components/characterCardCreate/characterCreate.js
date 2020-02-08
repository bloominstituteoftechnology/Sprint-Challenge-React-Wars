import React from 'react'
import CardAssemble from "./CardAssemble"
import {CardContainer, Card} from './cardStyle'

//declaring constructor CardsCreate passing props from dataGet
const CardsCreate = props => {

console.log(props.character)
//selecting CardContainer from ./cardStyle.js
//then mapping trhough aray of characters and passing it through CardAssemble
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
//exporting constructor
export default CardsCreate;
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
