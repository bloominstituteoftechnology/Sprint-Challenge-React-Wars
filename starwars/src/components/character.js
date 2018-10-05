import React from 'react';


const Character = (props) => { 
        return (          
          <div className='character'>              
            <h2>{props.char.name}</h2>
            <p>Gender: {props.char.gender}</p>
            <p>Height: {props.char.height}</p>
            <p>Mass: {props.char.mass}</p>
            <p>Eye Color: {props.char.eye_color}</p>
            <p>Gender: {props.char.gender}</p>
            <p>Skin Color: {props.char.skin_color}</p>
            <p>Hair Color: {props.char.hair_color}</p>
          </div>        
        );
   
}

export default Character;