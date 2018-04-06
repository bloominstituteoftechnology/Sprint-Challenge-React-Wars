import React, { Component } from 'react';
import { Card, CardTitle, CardSubtitle, CardBody } from 'reactstrap';
import Films from './Films.js';
import BioData from './BioData.js';




const CharacterCards = props => {
    /*  <BioData {...props} />  */
    return (
        <div className="character-wrapper">
        {props.charList.map((char, index) => (
            <Card>
            <CardBody key={index + char.birth_year}>
              <CardTitle>{char.name}</CardTitle>
              <CardSubtitle>{`birth year: ${char.birth_year} gender: ${char.gender}`}</CardSubtitle>
              <CardSubtitle>{`created: ${char.created}`}</CardSubtitle>
              <CardSubtitle>{`edited: ${char.edited}`}</CardSubtitle>
              <BioData {...props} /> 
              <Films films={char.films} />
            </CardBody>
          </Card>
        ))}
        </div>
    )
}








export default CharacterCards;