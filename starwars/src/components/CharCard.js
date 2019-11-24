import React from "react";
import {Card, h1, CardText, CardDeck, CardSubtitle, CardBody} from 'reactstrap';



const CharCard = props => {
    return (
        <div className="SWCard">
        <CardDeck>
        <Card>
        <CardBody>
            <h1>{props.name}</h1>
                <CardText>STATS:</CardText>
                <CardText>Gender: {props.gender}</CardText> 
                <CardText>Hair Color: {props.hair}</CardText>
                <CardText>Eye Color: {props.eyes}</CardText>
                <CardText>Height: {props.height}</CardText>
                <CardText>Skin Color: {props.skinColor}</CardText>
                <CardText>Birth Year: {props.birthYear}</CardText>  
                </CardBody>
                </Card>          
        </CardDeck>
        </div>
    );

};
export default CharCard;