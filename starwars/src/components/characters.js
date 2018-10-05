import React from 'react';
import './StarWars.css';

const Characters = props => {

    return(
        <div className='char-Container'>
        
        {props.chars.map(
            (char, i) =>
            <h2 key={i}>{char.name}</h2>
        )}
        
        </div>
    )

}

export default Characters