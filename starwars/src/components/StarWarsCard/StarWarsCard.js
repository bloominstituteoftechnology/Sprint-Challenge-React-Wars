import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import './StarWarsCard.css'
import PropTypes from 'prop-types';
import luke from './images/luke_skywalker.jpeg'

const StarWarsCard = (props) => {
  // src=require('./images/luke_skywalker.jpeg')
  console.log(props.char.name);
  // console.log(props.char.image);
  return (
    <div className="StarWarsCard">
      <Card className="CardContainer" >
      <CardImg top width="100%" src={props.image} alt="Card image cap" />
      {/* <img style={{width: "100%"}} src={require(`${props.char.image}`)} alt="Card image cap" /> */}
        <CardBody>
          <CardTitle className="CharName">{props.char.name}</CardTitle>
          <CardSubtitle className="BioStats">Bio Stats</CardSubtitle>

          <div className="CardBioContent">
          <CardText><span className="BioData">Birth Year: &nbsp;</span>{props.char.birth_year}</CardText>
          <CardText><span className="BioData">Gender: &nbsp;</span>{props.char.gender}</CardText>
          <CardText><span className="BioData">Height: &nbsp;</span>{props.char.height} <span>cm</span></CardText>
          <CardText><span className="BioData">Mass: &nbsp;</span>{props.char.mass} <span>kg</span></CardText>
          <CardText><span className="BioData">Skin Color: &nbsp;</span>{props.char.skin_color}</CardText>
          <CardText><span className="BioData">Hair Color: &nbsp;</span>{props.char.hair_color}</CardText>
          <CardText><span className="BioData">Eye Color: &nbsp;</span>{props.char.eye_color}</CardText>
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
    image: PropTypes.string,
  })
};

export default StarWarsCard;