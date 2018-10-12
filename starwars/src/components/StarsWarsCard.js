import React from 'react';

const StarWarsChars = props => {
    return(
        <div>
            <h1 onClick={() => {props.card(props.index)}}>{props.characters.name}</h1>
            <div className="character-card">
            </div>
            

        </div>
    )
}

export default StarWarsChars;