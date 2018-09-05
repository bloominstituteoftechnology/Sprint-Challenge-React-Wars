import React from 'react';
import Character from "../Character/Character";
import StarWars from '../StarWars.css';

const CharList = props => {
    return  (
    <div className="chars-container">
        {props.chars.map((char, i) => {
            return <Character key={i} char={char}/>;
        })}
    </div>
    )
}

export default CharList;



