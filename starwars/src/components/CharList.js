import React from 'react';
import Character from './Character';
import './CharList.css';

const CharList = props => {
    return (
        <div className='list-container' >
            {props.starwarsChars.map(char => (
                <Character char = {char} />
            ))}
        </div>
    );
};

export default CharList;