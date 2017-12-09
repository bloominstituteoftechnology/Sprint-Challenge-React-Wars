import React from 'react';
import './character.css'

const Character = ({props}) => {
    return (
<div>
    <div className="container">
        <div className="card">
        <div className="person">Name:{props.name}</div>
        <div className="birth">Born:{props.birth_year}</div>
        <div className="height">Height:{props.height}</div>
    </div>
    </div>
</div>
    )
}

export default Character