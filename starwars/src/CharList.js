import React from 'react';
import Chars from './Chars';


//map method to iterate starwarChars list 
const CharList = props => {
    return (
        <div>
            {props.starwarsChars.map(CharacterData =>{
                return <Chars key={CharacterData.reuslts} CharacterData={CharacterData} />
            })}
        </div>
    );
};

export default CharList;