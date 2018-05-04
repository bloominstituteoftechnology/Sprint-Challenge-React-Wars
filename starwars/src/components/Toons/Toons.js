import React from 'react';
import Luke from '../Luke/Luke.js';
import './Toons.css';

const Toons = props => {
    return (
        <Luke lukesStuff={props.toonData}/>
    )
}

export default Toons;