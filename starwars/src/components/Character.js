import React from 'react';
import './StarWars.css';

const Character = props => {
    return (
    <div className="char-display"> 
       <p> Name: {' '} {props.newChar.name} </p>
     <p>  Mass:{' '}  {props.newChar.mass} </p>
     <p> Height: {' '} {props.newChar.height} </p>
     <p> Born: {' '} {props.newChar.birth_year} </p>
 </div>
    );
};

export default Character;