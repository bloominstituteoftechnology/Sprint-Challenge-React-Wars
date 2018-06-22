import React from 'react';
import StarWarsChars from './StarWarsChars';

const StarWarsList = props => {
    return <StarWarsChars starwarschars={props.starwarschars} />
};

export default StarWarsList;