import React from 'react';
import Card from './Card';

const CardsList = (props) => {
    console.log(props);
    return (
        <div>
            {props.starwarsChars.map((character) => <Card character={character}/> )}
        </div>
    )
}

export default CardsList;