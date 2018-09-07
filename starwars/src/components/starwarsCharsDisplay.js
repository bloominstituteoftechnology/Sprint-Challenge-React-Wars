import React from 'react';
import './StarwarsChars'

const StarwarsCharsDisplay = props =>{

    return(

        <div>

                                <h2>{props.char}</h2>
        <p><span className="charProperty">Birthday:</span> {props.char.birth_year}</p>
        <p><span className="charProperty">Eye Color:</span> {props.char.eye_color}</p>
        <p><span className="charProperty">Gender:</span> {props.char.gender}</p>
        <p><span className="charProperty">Hair Color:</span> {props.char.hair_color}</p>
        <p><span className="charProperty">Height:</span> {props.char.height}m</p>
        <p><span className="charProperty">Mass:</span> {props.char.mass}kg</p>
        <p><span className="charProperty">Skin Color:</span> {props.char.skin_color}</p>

        </div>
    );
}

export default StarwarsCharsDisplay;