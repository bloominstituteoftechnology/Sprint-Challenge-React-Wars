// Write your Character component here
import React, {useState} from "react";
import {
    CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import styled from 'styled-components';

const Card = styled.div`
  width:30%;
  min-width:240px;
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  margin-bottom:20px;
`;

const Character = props => {

    console.log("characterPage", props);

    return (


        <Card>
            <CardBody>
                <CardTitle>{props.name}</CardTitle>
                <CardSubtitle>{props.birth_year}</CardSubtitle>
                <CardText>Height: {props.height} • Mass: {props.mass}</CardText>
            </CardBody>
        </Card>


    )


};


export default Character;