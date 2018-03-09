import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import './StarWarsCard.css'
import PropTypes from 'prop-types';
import img from './images/luke_skywalker.jpeg'

const StarWarsCard = (props) => {
  return (
    <div className="StarWarsCard">
      <Card className="CardContainer" >
      <CardImg top width="100%" src={img} alt="Card image cap" />
        <CardBody>
          <CardTitle className="CharName">{props.char.name}</CardTitle>
          <CardSubtitle className="VitalsData">Vital Data:</CardSubtitle>

          <div className="CardBioContent">
          <CardText><span>Birth Year:</span> {props.char.birth_year}</CardText>
          <CardText><span>Gender</span> {props.char.gender}</CardText>
          <CardText><span>Height:</span> {props.char.height} cm</CardText>
          <CardText><span>Mass:</span> {props.char.mass} kg</CardText>
          <CardText><span>Skin Color:</span> {props.char.skin_color}</CardText>
          <CardText><span>Hair Color:</span> {props.char.hair_color}</CardText>
          <CardText><span>Eye Color:</span> {props.char.eye_color}</CardText>
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