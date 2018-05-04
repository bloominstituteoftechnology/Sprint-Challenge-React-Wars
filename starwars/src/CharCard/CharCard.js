import React, { Component } from 'react';
import { Card, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';
import './CharCardStyle.css';

const CharCard = props => {
    return (
       <div className = 'row boxes'>
           {props.starwarsChars.map(person => {
               return (
                   <div className = 'col-12 col-sm-6 col-md-3 card'>
                   <Card>
                       <CardHeader><h2>{person.name}</h2></CardHeader>
                       <CardBody>
                           <CardText>Birth Year: {person.birth_year}</CardText>
                           <CardText>Gender: {person.gender}</CardText>
                           <CardText>Height: {person.height}</CardText>
                           <CardText>Mass: {person.mass}</CardText>
                           <CardText>Eye Color: {person.eye_color}</CardText>
                           <CardText>Hair Color: {person.hair_color}</CardText>    
                           <CardFooter>Created: {person.created}</CardFooter> 
                           <CardFooter>Edited: {person.edited}</CardFooter>                       
                       </CardBody>
                   </Card>
                   </div>
               )
           })}
        </div>
    )
}
export default CharCard;