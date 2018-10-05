import React from 'react';
import './StarWars.css';

import Display from './Display';

const DisplayChar = props => {
    return (
        <div>
            {props.starwarsChars.map(characters => {
                return (
                <Display
                    key={characters.name}
                    characters={characters}
                />
                );
            })}
        </div>
    );
}

export default DisplayChar;