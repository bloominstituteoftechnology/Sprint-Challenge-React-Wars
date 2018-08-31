import React from 'react';
import StarWarsChar from './StarWarsChar';

import './StarWars.css';

const StarWars = (props) => {
    return(
        <div>
            {props.starwarsChars.map(char => <StarWarsChar key={char.name} charProps={char} />)}
        </div>
    );
} // StarWars

export default StarWars;
