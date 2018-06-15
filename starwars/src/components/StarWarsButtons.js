import React from 'react';
import './StarWars.css';

const StarWarsButtons = props => {

    return (
        <div>
            <button onClick={() => props.button(props.prevPage)}>Previous!</button>
            <button onClick={() => props.button(props.nextPage)}>Next!</button>
        </div>
    );
}

export default StarWarsButtons;