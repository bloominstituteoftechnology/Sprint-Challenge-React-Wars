import React from "react";
import PropTypes from "prop-types";

const CharCard = props => {
  return (
    <div>
  <p>{props.char.name}</p>
  <p> height: {props.char.height}</p>
  <p> mass: {props.char.mass}</p>
  <p> hair_color: {props.char.hair_color}</p>
  <p> skin_color: {props.char.skin_color}</p>
  <p> eye_color: {props.char.eye_color}</p>
  <p> birth_year: {props.char.birth_year}</p>
  <p> gender: {props.char.gender}</p>
  </div>
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
