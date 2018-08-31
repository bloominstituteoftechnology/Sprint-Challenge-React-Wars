import React from 'react';

import './StarWars.css';

const StarWarsChar = (props) => {
    // console.log(props)
    return(
        <div className='char-container'>
            <div className='char-card'>
                {props.charProps.name}
            </div>
        </div>
    );
} // StarWarsChar

export default StarWarsChar;
