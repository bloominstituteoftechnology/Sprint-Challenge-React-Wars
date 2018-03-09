import React from "react";
import PropTypes from "prop-types";
import {
    Card,
    CardTitle,
    CardText,
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';

const CharCard = props => {
  return (
    <Card>
  <CardTitle>{props.char.name}</CardTitle>
  <CardText> height: {props.char.height}</CardText>
  <CardText> mass: {props.char.mass}</CardText>
  <CardText> hair_color: {props.char.hair_color}</CardText>
  <CardText> skin_color: {props.char.skin_color}</CardText>
  <CardText> eye_color: {props.char.eye_color}</CardText>
  <CardText> birth_year: {props.char.birth_year}</CardText>
  <CardText> gender: {props.char.gender}</CardText>
  </Card>
);
};

CharCard.defaultProps = {
  char: PropTypes.shape({
    name: ""
  })
};

CharCard.propTypes = {
  char: PropTypes.shape({
    name: PropTypes.string.isRequired,
    height: PropTypes.string,
    mass: PropTypes.string,
    hair_color: PropTypes.string,
    skin_color: PropTypes.string,
    eye_color: PropTypes.string,
    birth_year: PropTypes.string,
    gender: PropTypes.string,
    films: PropTypes.arrayOf(PropTypes.string)
  })
};

export default CharCard;
