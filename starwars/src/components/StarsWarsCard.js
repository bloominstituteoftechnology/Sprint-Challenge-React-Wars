import React from 'react';

const StarWarsChars = props => {
    return(
        <div>
            <h1>{props.characters.name}</h1>
        </div>
    )
}

export default StarWarsChars;