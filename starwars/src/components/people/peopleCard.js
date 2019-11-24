import React from "react";
import {Card, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap'
import styled from 'styled-components';
 
const CardBox= styled.div`
border:1px solid;
width:50%;
margin-bottom:10px;
margin:0 25% 2% 25%;
background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
`
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
