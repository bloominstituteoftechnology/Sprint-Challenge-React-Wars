import React from 'react';
import PropTypes from 'prop-types';
import './CharacterList.css';
import CharacterCard from '../CharacterCard/CharacterCard';

const CharacterList = props => (
    <div className="character-list">
        {props.characters.map(x => <CharacterCard character={x} key={x.name} />)}
    </div>
);

CharacterList.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.shape({
        birth_year: PropTypes.string,
        created: PropTypes.string,
        edited: PropTypes.string,
        eye_color: PropTypes.string,
        films: PropTypes.arrayOf(PropTypes.string),
        gender: PropTypes.string,
        hair_color: PropTypes.string,
        height: PropTypes.string,
        homeworld: PropTypes.string,
        mass: PropTypes.string,
        name: PropTypes.string,
        skin_color: PropTypes.string,
        species: PropTypes.arrayOf(PropTypes.string),
        starships: PropTypes.arrayOf(PropTypes.string),
        url: PropTypes.string,
        vehicles: PropTypes.arrayOf(PropTypes.string),
    })),
};

export default CharacterList;