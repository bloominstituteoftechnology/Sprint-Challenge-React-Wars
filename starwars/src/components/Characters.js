import React from 'react';
import Character from './Character';

const Characters = props => {
    return (
        <div>
            {props.starwarsChars.map((char, i) => {
                return (
                    <Character key={i} char={char} />
                ) 
            })}
                
        </div>
    )
}

export default Characters; 