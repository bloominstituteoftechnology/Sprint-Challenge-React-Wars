import React from 'react';
import Chars from './Chars';
import './CharList.css';


//map method to iterate starwarChars list 
const CharList = props => {
    return (
        <div className="Character-Wrapper">
            {props.starwarsChars.map(CharacterData =>{
                return <Chars key={CharacterData.url} CharacterData={CharacterData} />
            })}
        </div>
    );
};

export default CharList;