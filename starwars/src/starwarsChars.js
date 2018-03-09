import React from 'react';
import PropTypes from 'prop-types';

const starwarsChars = props => {
  return <div>{props.star.name}</div>;
};

starwarsChars.propTypes = {
  star: PropTypes.shape ({
    name: PropTypes.string,
    height: PropTypes.string,
    mass: PropTypes.string,
    hair_color: PropTypes.string,
    films: PropTypes.arrayOf(PropTypes.string)
  })
};

export default starwarsChars;
