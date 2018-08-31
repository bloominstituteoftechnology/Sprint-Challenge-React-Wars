import React from 'react';
import './StarWars.css';
import Card from './Card';

const CardList = (props) =>{
    return(
        <div className='characters'>
            {props.characterArray.map(character =>{
                return(
                    <Card character={character} />
                )
            })}
        </div>
    )
}

export default CardList;