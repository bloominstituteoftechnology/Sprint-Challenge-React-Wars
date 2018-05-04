import React from 'react';
import Toons from '../Toons/Toons.js';
import './StarWarsChars.css';

const StarWarsChars = props => {
    return(
        <div>
            {props.swChars.map((toonData, index)=>{
                return(
                    <Toons key={index} toonData={toonData} />
                )
            })}
        </div>
    )
}

export default StarWarsChars;