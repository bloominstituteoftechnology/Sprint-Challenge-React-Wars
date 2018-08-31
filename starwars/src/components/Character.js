import React from 'react';
import './StarWars.css'; 
import Films from'./Films'
const Character = (props) => {
    return ( 
        <div className="Styling">
            <p>I'm {props.name}, my height is {props.height}, my mass is {props.mass}, my hair color is {props.hair_color} and my skin color is {props.skin_color}</p>
            <p><Films films={props.films} /></p>
        </div>
    )
};

export default Character;