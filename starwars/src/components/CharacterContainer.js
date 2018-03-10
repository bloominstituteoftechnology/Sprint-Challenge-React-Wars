import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import './CharacterContainer.css';

const CharacterContainer = (props) => {
    return (
        <div className='characterContainer'>
            {props.characters.map(character => {
                return <CharacterCard key={`${character.name} ${character}`} characterCard={character}/>
            })}
        </div>
    );
};

CharacterContainer.propTypes = {
    characters: PropTypes.array.isRequired
};

export default CharacterContainer;