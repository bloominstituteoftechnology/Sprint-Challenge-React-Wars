import React from 'react';
import StarWarsChars from './StarWarsChars';

const StarWarsList = props => {
    return (
        <div>

        {props.starwarschars.map(starwarschars => <StarWarsChar char={starwarschar} />)}
        
        </div> 
   
    );
};

export default StarWarsList;