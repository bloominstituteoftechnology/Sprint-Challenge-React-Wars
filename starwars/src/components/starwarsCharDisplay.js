import React from 'react';

const StarwarsCharsDisplay = props =>{

    console.log(props.char);

    return(

        <div className = 'card'>

            <h2>{props.char.name}</h2> 
        <p className="data">Birthday: {props.char.birth_year}</p>
        <p className="data">Eye Color: {props.char.eye_color}</p>
        <p className="data">Gender: {props.char.gender}</p>
        <p className="data">Hair Color: {props.char.hair_color}</p>
        <p className="data">Height: {props.char.height}m</p>
        <p className="data">Mass: {props.char.mass}kg</p>
       

        </div>
    );
}

export default StarwarsCharsDisplay;