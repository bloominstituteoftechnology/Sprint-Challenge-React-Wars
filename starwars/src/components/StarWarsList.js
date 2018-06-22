import React from 'react';
import StarWarsChars from './StarWarsChars';
import './StarWars.css';

const StarWarsList = props => {
    return (
        <div className="chars-container">

        {props.chars.map(starwarschars => <StarWarsChars key={starwarschars.name} chars={starwarschars} />)};
        
        </div> 
   
    );
};

export default StarWarsList;