import React from "react";
import PropTypes from "prop-types";
import "./CharacterCard.css";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';



const CharCard = props => {
  return (
    <Card className="character grid-item">
    <CardBody>
      <CardTitle className="name"> {props.char.name} </CardTitle>
      <CardSubtitle className="height"> Height: {props.char.height} </CardSubtitle>
      <CardSubtitle className="mass"> Weight: {props.char.mass} </CardSubtitle>
      <CardSubtitle className="hair"> Hair Color: {props.char.hair_color} </CardSubtitle>
      </CardBody>
    </Card>
  );
};

CharCard.defaultProps = {};

CharCard.propTypes = {
  char: PropTypes.shape({
    name: PropTypes.string.isRequired,
    height: PropTypes.string,
    mass: PropTypes.string,
    hair_color: PropTypes.string,
    films: PropTypes.arrayOf(PropTypes.string)
  })
};

export default CharCard;
