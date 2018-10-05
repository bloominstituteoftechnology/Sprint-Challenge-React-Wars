import React from 'react';
import './StarWars.css';

const Buttons = props =>{
    return(
        <div className='btn-container'>
        
        {props.params.map(
            param =>
            <button key={param} onClick={props.sort}>{param}</button>
        )}
        
        
        </div>
    )
}

export default Buttons