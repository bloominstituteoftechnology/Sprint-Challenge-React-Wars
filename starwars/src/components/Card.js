import React from 'react';
import { Card, CardText, CardBody,CardTitle, CardSubtitle } from 'reactstrap';

const CharCard = ({ name, year, films }) => {
  return (
    <Card maxWidth='325px'>
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>Born: {year}</CardSubtitle>
        <CardText>Number of Films: {films}</CardText>
      </CardBody>
    </Card>
  );
}

export default CharCard;