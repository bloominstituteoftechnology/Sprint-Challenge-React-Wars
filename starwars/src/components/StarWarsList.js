import React from 'react';
import StarWarsChars from './StarsWarsCard';


const StarWarsList = props => {
    return(
        <div>
            <StarWarsChars characters={props.characters}/>
        </div>
    )
}

export default StarWarsList;

