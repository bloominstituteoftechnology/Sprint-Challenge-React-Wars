import React from 'react'

const Character = props => {
    return (
    <li>
        <h2>{props.char.name}</h2>
        <p><strong>Birth Year:</strong> {props.char.birth_year}</p>
        <p><strong>Gender:</strong> {props.char.gender}</p>
        <p><strong>Hair Color:</strong> {props.char.hair_color}</p>
        <p><strong>Eye Color:</strong> {props.char.eye_color}</p>
        <p><strong>Skin Color:</strong> {props.char.skin_color}</p>
        <p><strong>Height:</strong> {props.char.height}</p>
        <p><strong>Mass:</strong> {props.char.mass}</p>
    </li>
    )
}
 export default Character; 