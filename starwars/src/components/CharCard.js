import React from 'react';
import Char from './Char';

const CharCard = props => {
    const cardWrapper = {
        display: "flex",
        flexWrap: "wrap"
       
    }
    const card = {
        border: "1px solid black",
        borderRight: "15px solid black",
        borderTop: "5px solid black",
        borderRadius: "5px",
        width: "17%",
        margin: "auto",
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