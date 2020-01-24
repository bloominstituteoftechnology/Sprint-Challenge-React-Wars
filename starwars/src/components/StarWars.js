import React from "react";
import { CardTitle, CardText, Card, Col, CardBody } from "reactstrap";
// import {Card, CardText, CardBody, CardTitle, Button, Col} from "reactstrap";
import styled from "styled-components";

let NewCol = styled(Col)`
margin: 20px 0%;
`;
let NewCard = styled(Card)`
background-color: aqua;
opacity: .5
`;
const StarWars = (props) => {

    return(
                <NewCol xs="12" md="6" xl="3">
                     <NewCard>
                        <CardBody>
                            <CardTitle>Name: {props.name}</CardTitle>
                            <CardText>Height: {props.height} cm</CardText>
                            <CardText>Birthyear: {props.birth_year}</CardText>
                            <CardText>Gender: {props.gender}</CardText>
                            <CardText>Films: {props.films} </CardText>
                        </CardBody>
                        </NewCard>
                    </NewCol>



        // <div>
        //     {props.name}
        //     {props.height} 
        //     {props.birth_year}
        //     {props.gender}
        //     {props.films.length}
        // </div>
    )
}

export default StarWars;

