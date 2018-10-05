import React from 'react';
import Character from './Character';
import './StarWars.css';

const StarwarsChars = props => {
    return (
        <div className="container">
            {props.characters.map(character => <Character key={character.name} char={character} />)}
        </div>
    )
};
export default StarwarsChars;