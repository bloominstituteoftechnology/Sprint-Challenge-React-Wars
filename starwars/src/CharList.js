import React from 'react';
import Chars from './Chars';


//map method to iterate starwarChars list 
const CharList = props => {
    return (
        <div>
            {props.charList.map(character, index => {
                return <Chars key={character.id} character={character} />
            })}
        </div>
    )
}

export default CharList;