import React from "react";
import {Card, CardText, CardBody, CardTitle, CardSubtitle, CardHeader} from 'reactstrap'
import styled from 'styled-components';
 
const CardBox= styled.div`
border:1px solid grey;
width:100%;
height:auto;
margin:5% 5% 5% 0;
font-size:20px;
`
const PeopleCard = (props) => {
    return (
      <CardBox>
        <Card>
        <CardHeader> 
          <CardTitle>{props.name}
          </CardTitle>
        </CardHeader>
        <CardBody>
          <CardSubtitle>{props.bDay}</CardSubtitle>
          <CardText>The character is {props.height}cm tall, weights {props.mass} kgs, has {props.hairColor} 
            hair color, has {props.skinColor} skin, and {props.eyeColor} eyes. </CardText>
        </CardBody>  
      </Card>
    </CardBox>
      
    );
  };
  
  export default PeopleCard;

 