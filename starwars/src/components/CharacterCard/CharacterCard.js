import React from 'react';
import Character from './Character';

const CharacterCard = (props) => {
    let arr = [];
    for (const [key, value] of Object.entries(props.character)) {
        arr.push(`${key}: ${value}`);
        console.log(arr);
        
        } 
    return (
        <div 
        className = 'card-container'  
        characteritem= {props.characteritem}
        onClick = {() => props.displayCard(props.character.name)} >
            {arr}
            
        </div>
    )};


export default CharacterCard;