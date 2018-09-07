import React from 'react';
import CharacterCards from './CharacterCards';
import './StarWars.css';

const CharacterCardContainer = props => {
    return (
        <div className="cardContainer">
            {props.characters.map(character => {
                return <CharacterCards characters={character}/>;
            })}
        </div>
    );
};



export default CharacterCardContainer;