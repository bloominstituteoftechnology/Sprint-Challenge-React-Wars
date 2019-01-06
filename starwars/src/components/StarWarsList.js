import React from 'react';
import App from './App.js';
import './StarWars.css';

function StarWarsList (props) {
    return(
        <div>
            {props.chars.map(chars => 
                <StarWarsData key={chars.name} chars={chars} />
            )}
        </div>
    )
}

export default StarWarsList;