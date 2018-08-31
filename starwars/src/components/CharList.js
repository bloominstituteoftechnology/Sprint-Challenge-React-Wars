import React from 'react';
import Char from './Char';
import './StarWars.css';

function CharList(props) {
    return (
        <div className='charlist'>
            {props.chars.map(char => <Char char={char} />)}
        </div>
    );
};

export default CharList;