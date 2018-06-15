import React from 'react';
import character from "../character/character";

const charList = props => {
    return  (
    <div className="chars-container">
        {props.chars.map((char, i) => {
            return <character key={i} char={char}/>;
        })}
    </div>
    )
}

export default charList;



