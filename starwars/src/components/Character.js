import React from 'react'
import './Character.css'

const Character = (props) => {
    return(
        <div data-id={props.obj.created}>
            <h1>{props.obj.name}</h1>
            <div className='card'>
                <p>gender : {props.obj.gender}</p>
                <p>year of birth: {props.obj.birth_year}</p>
                <p>hair color: {props.obj.hair_color}</p>
                <p>eye color: {props.obj.eye_color}</p>
            </div>
        </div>
    )
}

export default Character