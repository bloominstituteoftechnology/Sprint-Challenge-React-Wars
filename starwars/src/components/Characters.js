import React from 'react';
import Card from './Card';
import './StarWars.css';

const Characters = (props) => {
    return (
        <div>
            {props.characters.map((character) => {
                return (
                    <div>
                        <Card character={character} />
                    </div>
                )
            })}
        </div>
    )
}

export default Characters;