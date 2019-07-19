import React from 'react'
import './Characters.css'

export default function Characters(props) {

return (
<div>
    <Characters />
    <h3>{props.name}</h3>
    <h3>{props.birth_year}</h3>
    <h3>{props.hair_color}</h3>
    <h3>{props.height}</h3>
    <h3>{props.eye_color}</h3>
    <h3>{props.gender}</h3>
</div>
    )
}