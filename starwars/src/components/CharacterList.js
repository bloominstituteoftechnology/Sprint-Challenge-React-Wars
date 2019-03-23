import React from 'react';
import './StarWars.css';

import CharData from './CharData';

const CharacterList = (props) => {
    return (
        <div className="characterList">
            {props.characters.map((character, index) => <CharData  id={index} character={character} />) }
        </div>
    );
}

export default CharacterList;