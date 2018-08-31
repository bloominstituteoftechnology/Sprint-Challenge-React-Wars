import React from 'react';
import './StarWars.css'; 
const Character = (props) => {
    return ( 
        <div className="Styling">
            I'm {props.name}, my height is {props.height}, my mass is {props.mass}, my hair color is {props.hair_color} and my skin color is {props.skin_color}
        </div>
    )
};

export default Character;