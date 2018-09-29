import React from 'react';
import Card from './Card';
import './StarWars.css';

const CardList = props => {
    return (
        <div className="custom-list">
            {props.characters.map(char => {
                return (
                    <Card
                        character={char}
                        key={char.created}
                    />
                )
            })}
            
        </div>
    );
};

export default CardList;
