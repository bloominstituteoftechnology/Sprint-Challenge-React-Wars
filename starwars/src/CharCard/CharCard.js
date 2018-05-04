import React, { Component } from 'react';
import { Card, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';

const CharCard = props => {
    return (
       <div className = 'col-4 boxes'>
           {props.starwarsChars.map(person => {
               return (
                   <Card>
                       <CardHeader>{person.name}</CardHeader>
                       <CardBody>
                           <CardText>Birth Year: {person.birth_year}</CardText>
                           <CardText>Gender: {person.gender}</CardText>
                           <CardText>Height: {person.height}</CardText>
                           <CardText>Mass: {person.mass}</CardText>
                           <CardText>Eye Color: {person.eye_color}</CardText>
                           <CardText>Hair Color: {person.hair_color}</CardText>                           
                       </CardBody>
                   </Card>
               )
           })}
        </div>
    )
}
export default CharCard;