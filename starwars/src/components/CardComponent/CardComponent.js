import React from 'react';
import PropTypes from 'prop-types';
import './CardComponent.css';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const CardComponent = props => {
  return (
    <div className="cardDiv">
      <Card color="black" className="cardCard">
        <CardBody className="cardBody">
          <CardTitle>{props.char.name}</CardTitle>
          <CardSubtitle>Birth Year: {props.char.birth_year}</CardSubtitle>
          <CardText>Height: {props.char.height}</CardText>
          <CardText>Mass: {props.char.mass}</CardText>
          <CardText>Hair Color: {props.char.hair_color}</CardText>
          <CardText>Skin Color: {props.char.skin_color}</CardText>
          <CardText>Eye Color: {props.char.eye_color}</CardText>
          <CardText>Gender: {props.char.gender}</CardText>
          <Button>Learn More</Button>
        </CardBody>
      </Card>
    </div>
  )
}

CardComponent.propTypes = {
  starwarsChars: PropTypes.shape({
    name: PropTypes.string,
    height: PropTypes.string,
    mass: PropTypes.string,
    hair_color: PropTypes.string,
    skin_color: PropTypes.string,
    eye_color: PropTypes.string,
    gender: PropTypes.string
  })
}

export default CardComponent;