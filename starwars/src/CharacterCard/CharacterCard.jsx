import React from "react";
import PropTypes from "prop-types";
import "./CharacterCard.css";

const CharCard = props => {
  return (
    <tr className="character">
      <td className="name"> {props.char.name} </td>
      <td className="height"> {props.char.height} </td>
      <td className="mass">{props.char.mass} </td>
      <td className="hair">{props.char.hair_color} </td>
    </tr>
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
