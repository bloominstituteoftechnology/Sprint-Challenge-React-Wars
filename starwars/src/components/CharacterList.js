import React from 'react';
import Character from './Character';
import './StarWars.css'

const CharacterList = (props) => {
    console.log(props);
    return (
        <div className='display-grid'>
            <div className='card'>
            {props.starwarsChars.map(char => (
                <Character char={char} />
                // <Character />
            ))}
            </div>
        </div>
    );
}






export default CharacterList;