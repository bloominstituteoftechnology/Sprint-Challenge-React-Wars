import React from 'react';
import Card from './Card';
import './Card.css';

function CardContainer(props){
    return(
        <ul>
            {props.charactersChunk.map(char => <Card char={char} name={char.name} gender={char.gender} height={char.height} hair={char.hair_color} />)}
        </ul>
    );
};

export default CardContainer;