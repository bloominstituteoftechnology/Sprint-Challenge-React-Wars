import React from 'react'

const Character = (props) => {
    return(
        <div data-id={props.obj.created}>
            <h1>{props.obj.name}</h1>
            <p>gender : {props.obj.gender}</p>
            <p>year of birth: {props.obj.birth_year}</p>
            <p>hair color: {props.obj.hair_color}</p>
            <p>eye color: {props.obj.eye_color}</p>
        </div>
    )
}

export default Character