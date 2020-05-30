import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Character = (props) => {
    console.log('from Character', props)

    return (
        <div className='first'>
            <h2 className='name'>{props.character}</h2>
            <p className='info'>{props.gender}<span>{props.eye_color}</span><span>{props.hair_color}</span></p>
        </div>
    )
}

export default Character;

