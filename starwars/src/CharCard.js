import React from 'react';
import PropTypes from 'prop-types';

const CharCard = props => {
    return <div>{props.starwarschar.name}</div>;
};

CharCard.defaultProps = {
    starwarschar: PropTypes.shape({
        name: "Anikin"
    })
};

CharCard.PropTypes = {
    starwarschar: PropTypes.shape({
        name: PropTypes.string.isRequired,
        height: PropTypes.string,
    })
}