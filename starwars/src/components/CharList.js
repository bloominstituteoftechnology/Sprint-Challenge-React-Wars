import React from 'react';
import Char from './Char.js';

const CharList = (props) => {
    
    let stars = props.stars;
    console.log(stars);
    
    return (
        stars.map((star)=>{
            return <Char key={Date.now()} star={star}/>
        })
    )
    
};

export default CharList;

