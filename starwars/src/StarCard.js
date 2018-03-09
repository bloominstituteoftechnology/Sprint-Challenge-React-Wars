import React from 'react';
import PropTypes from 'prop-types';

const StarCard = props => {
  return <div>{props.star.name}</div>;
};

StarCard.propTypes = {
  star: PropTypes.shape ({
    name: PropTypes.string,
    height: PropTypes.string,
    mass: PropTypes.string,
    hair_color: PropTypes.string,
    films: PropTypes.arrayOf(PropTypes.string)
  })
};

export default StarCard;
