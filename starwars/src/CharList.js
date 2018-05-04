import React from 'react';
import Chars from './Chars';


//map method to iterate starwarChars list 
const CharList = props => {
    return (
        <div>
            {props.starwarsChars.map(chars => {
                return <Chars key={chars.id} char={chars} />
            })}
        </div>
    )
}

export default CharList;