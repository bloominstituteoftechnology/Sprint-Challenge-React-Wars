import React from 'react';
import StarWarsCharacter from './StarWarsCharacter';

import './StarWars.css';

const StarWarsList = props => { 
    return (
        <div className="character-grid">
            <div className="container">
                {props.starWarsList.map((character) => 
                    <StarWarsCharacter character={character} />
                )}
            </div>
        </div>
    );
};

export default StarWarsList;