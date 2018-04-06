import React from 'react';
import { Card, CardTitle, CardSubtitle, CardBody } from 'reactstrap';
import './CardSW.css';

const CardSW = props => {
    return (
      <div className="CardSW-Wrapper">
        {props.starwarsChars.map(person => (
          <Card>
            <CardBody key={person.id} className="card">
              <CardTitle>{`${person.name}`}</CardTitle>
              <CardSubtitle>Gender: {person.gender}</CardSubtitle>
              <CardSubtitle>Height: {person.height}</CardSubtitle>
              <CardSubtitle>Skin Color: {person.skin_color}</CardSubtitle>
              <CardSubtitle>Birth Year: {person.birth_year}</CardSubtitle>
            </CardBody>
          </Card>
        ))}
      </div>
    );
  };

export default CardSW;