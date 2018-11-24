import React, { Component } from 'react';

import StarWarsCharacter from './StarWarsCharacter';
import './StarWars.css';

function StarWarsList(props) {
    console.log('rops.starwarsChars', props.starwarsChars)
    return (
        <div className='starwars-list'>
            {props.starwarsChars.map(character => (
                <div key={character.name} className='starwars-card'>
                    <StarWarsCharacter character={character} />
                </div>
            ))}
        </div>
    );
}

export default StarWarsList