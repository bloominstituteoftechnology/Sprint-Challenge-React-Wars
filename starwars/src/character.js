import React from 'react';
import App from './App'

const Character =  props =>{
  
    return (
        <div className = 'Guy'> 


            <h1>  {props.stuff.name}</h1>
            <h2> height: {props.stuff.height}</h2>
            <h2> mass: {props.stuff.mass}</h2>
            <h2> gender: {props.stuff.gender}</h2>
             <h2> hair:{props.stuff.hair_color}</h2>
             <h2> eye_color:  {props.stuff.eye_color}</h2>
             <h2> birth year:   {props.stuff.birth_year}</h2>


            </div>
    );
};

 
 export default Character;