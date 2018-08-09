import React from 'react';
import ToonName from '../ToonName/ToonName.js';
import ToonHeight from '../ToonHeight/ToonHeight.js';
import ToonMass from '../ToonMass/ToonMass.js';
import './Toons.css';

const Toons = props => {
    return (
        <div>
            <ToonName toonName={props.toonData} />
            <ToonHeight toonHeight={props.toonData} />
            <ToonMass toonMass={props.toonData} />
        </div>
    )
}

export default Toons;