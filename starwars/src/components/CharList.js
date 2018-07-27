import React from 'react';
import Char from './Char.js';

const CharList = (props) => {
    
    let stars = props.stars;
    return (
        stars.map((star)=>{
            return <Char star={star}/>
        })
    )
    
};

export default CharList;

