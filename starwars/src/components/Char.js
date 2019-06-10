import React from 'react';

const Char = props => {
    return (
        <div className='list'>
            <h1 className='name'>{props.character.name}</h1>
            <p>Birthday: {props.character.birth_year}</p>
            <p>{props.character.gender}</p>
        
        </div>
    );
};



export default Char;