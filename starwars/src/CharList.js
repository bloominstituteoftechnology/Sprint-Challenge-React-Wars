import React from 'react';
import Chars from './Chars';


//map method to iterate starwarChars list 
const CharList = props => {
    return (
        <div>
            {props.starwarsChar.map(character => {
                console.log(character);
                return <Chars key={character.id} />
            })}
        </div>
    )
}

export default CharList;