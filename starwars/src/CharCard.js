import React from "react";
import PropTypes from "prop-types";


const CharCard = props => {
    return <div>{props.char.name}</div>;
  };
  
  CharCard.defaultProps = {
    char: PropTypes.shape({
      name: "Anikin"
    })
  };
  
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