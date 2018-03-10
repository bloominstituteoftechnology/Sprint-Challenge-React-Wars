import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import './StarWarsCard.css'
import PropTypes from 'prop-types';

const StarWarsCard = (props) => {
  // src=require('./images/luke_skywalker.jpeg')
  return (
    <div className="StarWarsCard">
      <Card className="CardContainer" >
      <CardImg top width="100%" src={props.char.image} alt="Card image cap" />
        <CardBody>
          <CardTitle className="CharName">{props.char.name}</CardTitle>
          <CardSubtitle className="BioStats">Bio Stats</CardSubtitle>

          <div className="CardBioContent">
          <CardText><span className="BioData">Birth Year:</span> {props.char.birth_year}</CardText>
          <CardText><span className="BioData">Gender</span> {props.char.gender}</CardText>
          <CardText><span className="BioData">Height:</span> {props.char.height} <span>cm</span></CardText>
          <CardText><span className="BioData">Mass:</span> {props.char.mass} <span>kg</span></CardText>
          <CardText><span className="BioData">Skin Color:</span> {props.char.skin_color}</CardText>
          <CardText><span className="BioData">Hair Color:</span> {props.char.hair_color}</CardText>
          <CardText><span className="BioData">Eye Color:</span> {props.char.eye_color}</CardText>
          </div>
          <Button className="btn-card">Learn More</Button>
        </CardBody>
      </Card>
    </div>
  )
};

StarWarsCard.propTypes = {
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