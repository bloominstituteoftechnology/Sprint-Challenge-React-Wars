import React from 'react';
import Character from '../Character/Character';

const CharsContainer = props => {
    return  (
    <div className="chars-container">
        {props.chars.map((char, i) => {
            return <Character key={i} char={char}/>;
        })}
    </div>
    )
}

export default CharsContainer;