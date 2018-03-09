import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import './StarWarsCard.css'
import PropTypes from 'prop-types';

const StarWarsCard = (props) => {
  return (
    <div className="StarWarsCard">
      <Card className="CardContainer" >
        <CardBody>
          <CardTitle className="CharName">{props.char.name}</CardTitle>
          <CardSubtitle className="VitalsData">Vital Data:</CardSubtitle>

          <div className="CardBioContent">
          <CardText>Birth Year: {props.char.birth_year}</CardText>
          <CardText>Gender: {props.char.gender}</CardText>
          <CardText>Height: {props.char.height} cm</CardText>
          <CardText>Mass: {props.char.mass} kg</CardText>
          <CardText>Skin Color: {props.char.skin_color}</CardText>
          <CardText>Hair Color: {props.char.hair_color}</CardText>
          <CardText>Eye Color: {props.char.eye_color}</CardText>
          </div>
          <Button className="btn-card">Learn More</Button>
        </CardBody>
      </Card>
    </div>
  )
};

StarWarsCard.propTypes ={
  char: PropTypes.shape({
    name: PropTypes.string,
    birth_year: PropTypes.string,
    gender: PropTypes.string,
    height: PropTypes.string,
    mass: PropTypes.string,
    skin_color: PropTypes.string,
    hair_color: PropTypes.string,
    eye_color: PropTypes.string,
  })
};

export default StarWarsCard;