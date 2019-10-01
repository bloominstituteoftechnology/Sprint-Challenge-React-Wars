import React from "react";
import {Card, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap'
import styled from 'styled-components';
 
const CardBox= styled.div`
border:1px solid;
width:50%;
margin-bottom:10px;
margin:0 25% 2% 25%;
`

//  export function PeopleCardOLD(props){
// return(
//     <div  key={props.id}>
//         <h2>{props.name}</h2>
//         <h3>{props.sex} </h3>
//         <h3>{props.bDay} </h3>
//         <h3>{props.height} </h3>
//         <h3>{props.mass} </h3>
//         <h3>{props.hairColor} </h3>
//         <h3>{props.skinColor} </h3>
//         <h3>{props.eyeColor} </h3>
//     </div>
//     )
// }
const PeopleCard = (props) => {
    return (
      <div>
        <Card>
            <CardBox>
                <CardBody>
                    <CardTitle>{props.name}</CardTitle>
                    <CardSubtitle>{props.bDay}</CardSubtitle>
                    <CardText>The character is {props.height}cm tall, weights {props.mass} kgs, has {props.hairColor} 
                    hair color, has {props.skinColor} skin, and {props.eyeColor} eyes. </CardText>
                </CardBody>
            </CardBox>
         </Card>
       
      </div>
    );
  };
  
  export default PeopleCard;
