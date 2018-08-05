import React from "react";
//import './Character.css';

const Character = props => {
    console.log(props.char);
    const { name, height, mass } = props.char;
    return (
        <div>
            <div>{name}</div>
            <div>{height}</div>
            <div>{mass}</div>
        </div>
    );
}
export default Character;