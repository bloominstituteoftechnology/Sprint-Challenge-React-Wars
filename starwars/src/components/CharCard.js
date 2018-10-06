import React from 'react';
import Char from './Char';

const CharCard = props => {
    return (
        <div>
            {props.starwarsChars.map(char => {
                return (
                    <div className = "card"> 
                        <h1>{char.name}</h1>
                        <Char char ={char}/> 
                    </div>               
                )
            })}
        </div>

    )
}

export default CharCard;