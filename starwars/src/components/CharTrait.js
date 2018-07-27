import React from 'react';
import SubTrait from './SubTrait.js';
import './Char.css';


const CharTrait = (props) => {
    console.log(props);

    return (
        
        <div className="trait">{`${props.traitName} : ${props.traitValue}`}</div>
    );
    
};

export default CharTrait;