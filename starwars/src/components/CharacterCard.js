import React from 'react';
import CharacterList from './CharacterList';
import './StarWars.css';

const CharacterCard = props => {
    return (
        <div className="characterCard">
            {props.starwarsChars.map(character =>
                <CharacterList key={character.name} character={character} />
            )}
         </div>
    );
};

export default CharacterCard;