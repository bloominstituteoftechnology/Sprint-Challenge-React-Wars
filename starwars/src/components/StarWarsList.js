import React from 'react';
import StarWarsChars from './StarsWarsCard';


const StarWarsList = props => {
    return(
        <div>
            {props.characters.map((char, index) => {
                return(
                   <StarWarsChars key={index.toString()} characters={char} index={index} card={props.card} />
                )
            })}
           
        </div>
    )
}

export default StarWarsList;

