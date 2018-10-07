import React from 'react';
import Char from './Char';

const CharCard = props => {
    const cardWrapper = {
        display: "flex",
        flexWrap: "wrap",
    }
    const card = {
        border: "1px solid black",
        borderBottom: "10px solid black",
        borderRight: "20px solid black",
        borderTop: "2px solid black",
        width: "40%",
        margin: "auto"
    }
    
    return (
        <div style = {cardWrapper}>
            {props.starwarsChars.map(char => {
                return (
                    <div style ={card} >
                        <h2>{char.name}</h2>
                        <Char char ={char}/> 
                    </div>           
                )
            })}
        </div>

    )
}

export default CharCard;