import React from 'react';

const Character = (props) => {
    return (
        <div> 
            <h2>{props.name}</h2>
            <p className='birth_year'> birth year: {props.birth} </p>
        </div>
    )  
};

export default Character;