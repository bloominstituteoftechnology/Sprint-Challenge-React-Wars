import React from 'react';
import Card from './Card';

const CardsList = props => {
    return (
        <div className="CardsList">
            {props.characters.map(character => {
                return (
                    <Card key={Math.random()} character={character}/>
                )
            })}
        </div>
    )

}

export default CardsList;