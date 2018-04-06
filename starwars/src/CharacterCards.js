import React, { Component } from 'react';
import { Card, CardTitle, CardSubtitle, CardBody } from 'reactstrap';
import BioData from './BioData.js';

const CharacterCards = props => {
    return (
        <div className="character-wrapper">
        {props.starwarsChars.map((char, index) => (
            <Card>
            <CardBody key={index + char.birth_year}>
              <CardTitle>{char.name}</CardTitle>
              <CardSubtitle>{`created: ${char.created}`}</CardSubtitle>
              <BioData profile={props.char} />
            </CardBody>
          </Card>
        ))}
        </div>
    )
}








export default CharacterCards;