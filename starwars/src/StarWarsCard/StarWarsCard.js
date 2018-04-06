import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import './StarWarsCard.css'
import PropTypes from 'prop-types';

const StarWarsCard = (props) => {
  return (
    <div className="StarWarsCard">
      <Card className="CardContainer" >
        <CardImg width="80%" src={props.image} alt="starwars card" />
        <CardBody className="Card">
          <CardTitle className="Char">{props.char.name}</CardTitle>
          <CardSubtitle className="BioStats">Bio</CardSubtitle>
          <div className="CardBioContent">
            <CardText><span className="Bio">Birth Year: &nbsp;</span>{props.char.birth_year}</CardText>
            <CardText><span className="Bio">Gender: &nbsp;</span>{props.char.gender}</CardText>
            <CardText><span className="Bio">Height: &nbsp;</span>{props.char.height} <span>cm</span></CardText>
            <CardText><span className="Bio">Mass: &nbsp;</span>{props.char.mass} <span>kg</span></CardText>
            <CardText><span className="Bio">Skin Color: &nbsp;</span>{props.char.skin_color}</CardText>
            <CardText><span className="Bio">Hair Color: &nbsp;</span>{props.char.hair_color}</CardText>
            <CardText><span className="Bio">Eye Color: &nbsp;</span>{props.char.eye_color}</CardText>
          </div>
          <Button className="btn-card">May the Force Be With You</Button>
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