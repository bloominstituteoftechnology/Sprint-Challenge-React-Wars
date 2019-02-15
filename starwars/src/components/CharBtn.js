import React from 'react';
import './StarWars.css';

function CharBtn(props) {
    return (
        <div className='btn'>
            <button className='previous' onClick={props.previous}>Previous</button>
            <button className='next' onClick={props.next}>Next</button>
        </div>
    );
};

export default CharBtn;