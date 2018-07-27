import React from 'react';
import SubTrait from './SubTrait.js';


const CharTrait = (props) => {
    console.log(props);
    return (
        
        <div>{`${props.traitName} : ${props.traitValue}`}</div>
    );
    
};

export default CharTrait;