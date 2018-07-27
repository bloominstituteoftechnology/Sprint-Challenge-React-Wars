import React from 'react';
import './StarWars.css';

const Characters = props => {
    // let { starwarsChars, getCharacters } = this.props;

    return <div className="chars">{props.swChar.name}</div>

};

export default Characters;