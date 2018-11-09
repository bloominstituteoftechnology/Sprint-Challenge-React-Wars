import React, { Component } from 'react';
import Character from './Character';
import './StarWars.css';

const CharacterList = props => {
    return(
        <div className='cardList'>
            {props.starwarsChars.map((char,index) => (
                <Character
                    char={char}
                    homeworld={props.homeworlds}
                />
            ))}
        </div>
    );
}

export default CharacterList;