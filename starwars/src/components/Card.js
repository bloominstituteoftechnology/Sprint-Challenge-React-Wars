import React, { Component } from "react";
import { render } from "react-dom";
import './StarWars.css';

const Card = (props) => {
 return(
    <div className = 'card'> 
        <p> Name: {props.c.name}</p>     
        <p> Gender: {props.c.gender}</p>     
        <p> Height: {props.c.height}</p>     
        <p> Mass: {props.c.mass}</p>  
        <p> Skin: {props.c.skin}</p>   
        <p> Eyes: {props.c.eyes}</p> 
        <p> Star-ships: {props.c.starships}</p>           
    </div>
   );
}

export default Card;