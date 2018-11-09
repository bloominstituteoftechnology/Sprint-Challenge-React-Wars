import React from 'react';
import Character from './Character';
import './Character.css';


const ChararcterList = props => {
    return(
        <div className='characterContainer'>
            {props.starwarsChars.map((item) => {
                return <Character key={item.created} Character={item}/>;
            })}
        </div>
    );
};

export default ChararcterList;
