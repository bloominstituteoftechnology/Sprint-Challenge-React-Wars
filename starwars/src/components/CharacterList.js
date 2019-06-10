import React from 'react';
import Char from './Char';



const CharacterList = props => {
    return (
        <div>
            {props.chars.map(char => {
                return <Char 
                key = {char.created} 
                random={char} 
                name = {props.chars.name}
                />
            })}
        </div>
    );
}



export default CharacterList;