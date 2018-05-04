import React from 'react';
import ToonName from '../ToonName/ToonName.js';
import './Toons.css';

const Toons = props => {
    return (
        <ToonName toonName={props.toonData}/>
    )
}

export default Toons;