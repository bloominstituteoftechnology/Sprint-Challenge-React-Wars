import React, { Component } from 'react';
import './StarWars.css'

const Character = props => {
    return <div>{props.oneChar.name}</div>
}

export default Character
