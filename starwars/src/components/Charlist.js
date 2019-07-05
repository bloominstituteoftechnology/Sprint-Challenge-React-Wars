import React from 'react';
import './StarWars.css';
import Char from './Char';

const Charlist = props => {
    return (
        <div className="Charlist-Wrapper">
           {props.characters.map(char => <Char stwrChar={char} />)};
        </div>
    );
};


export default Charlist;