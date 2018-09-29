import React from 'react';
import './StarWars.css';

 function Character(props) {
    return (
        <div>
            <h3>{props.char.name}</h3>
            <p>Gender: {props.char.gender}</p>
            <p>Birth Year: {props.char.birth_year}</p>
            <p>Height: {props.char.height}</p>
            <p>Mass: {props.char.mass}</p> 
            <p>Hair Color: {props.char.hair_color}</p>  
            <p>Eye Color: {props.char.eye_color}</p>   
        </div>      
    );
};

 export default Character; 
