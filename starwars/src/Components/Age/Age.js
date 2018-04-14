import React from 'react';
import './Age.css';

const Age = props => {
    return (
        <div className='container'>
            {props.stuff.map(k => <div>{k.age}</div>)}
        </div>
    )};


export default Age;