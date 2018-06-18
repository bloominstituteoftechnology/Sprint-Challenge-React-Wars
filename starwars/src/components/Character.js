import React from "react";

const Character = props => {
    return (
        <ul>
        {props.swcharacters.map(char => {
            return <li key= {Math.random()}> {char} </li>;
        })}
        </ul>
    );
};

export default Character;