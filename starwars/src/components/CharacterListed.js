import React from 'react';
import StarWarsCharacter from './StarWarsCharacter.js';

const CharacterListed = props => {
    return (
        <div>
            {props.starwarsChars.map(starWarsCharacter => ( //starwarsChars = empty array, mapping a copy and putting the toggle on the StarWarsCharacter = typed result?
                <StarWarsCharacter
                    handleToggleComplete={props.handleToggleComplete}
                    key={StarWarsCharacter.id}
                    StarWarsCharacter={StarWarsCharacter}
                />
            ))}
        </div>
    );
};
    export default CharacterListed;