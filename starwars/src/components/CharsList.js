import React from 'react';
import './Card.css';
import Char from './Char';


const CharList = props => {
    return (
        <div className='charlist'>
            {props.chars.map(char => 
            <Char swChar={char} />              
            )}   
        </div>
    )
}

export default CharList;