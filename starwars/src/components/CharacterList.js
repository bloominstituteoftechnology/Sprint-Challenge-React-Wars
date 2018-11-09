import React, { Component } from 'react';
import Character from './Character';
import './StarWars.css';

const CharacterList = props => {
    return(
        <div className='cardList'>
            {props.starwarsChars.map(char => (
                <Character
                    char={char}
                />
            ))}
        </div>
    );
}

export default CharacterList;