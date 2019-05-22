import React from 'react'

import './Character.css'

const Character = (props) => {
    return (
        <div data-id={props.obj.created}> 
    <div className='card' onClick={props.backgroundHandler}>
        <h1>{props.obj.name}</h1>
        <p> gender: {props.obj.gender} </p>
        <p> birth year: {props.obj.birth_year} </p>
        <p> hair color: {props.obj.hair_color} </p>
        <p> skin color: {props.obj.skin_color} </p>
        <p> eye color: {props.obj.eye_color} </p>

    </div>
    </div>
    )
}

export default Character