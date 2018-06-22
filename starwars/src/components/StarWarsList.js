import React from 'react';
import StarWarsChars from './StarWarsChars';

const StarWarsList = props => {
    return (
        <div>

        {props.starwarschars.map(starwarschars => <StarWarsChars char={starwarschars} />)}
        
        </div> 
   
    );
};

export default StarWarsList;