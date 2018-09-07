import React from 'react';

const StarwarsCharsDisplay = props =>{

    console.log(props.char);

    return(

        <div>

            <h2>{props.char.name}</h2> 
        <p><span className="charProperty">Birthday:</span> {props.char.birth_year}</p>
        <p><span className="charProperty">Eye Color:</span> {props.char.eye_color}</p>
        <p><span className="charProperty">Gender:</span> {props.char.gender}</p>
        <p><span className="charProperty">Hair Color:</span> {props.char.hair_color}</p>
        <p><span className="charProperty">Height:</span> {props.char.height}m</p>
        <p><span className="charProperty">Mass:</span> {props.char.mass}kg</p>
       

        </div>
    );
}

export default StarwarsCharsDisplay;