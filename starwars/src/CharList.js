import React from 'react';
import './CharList.css';


const CharList = props => {
    return (
        <div className="Char-Wrapper">
            {props.starwarsChars.map(char => {
                return <Friend key={char.id} char={char} />;
            })}
        </div>
    );
};

export default CharList;
