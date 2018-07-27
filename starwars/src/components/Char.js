import React from 'react';

const Char = props =>{
    return (
    <div className="starWars">
     <div className="char1 first">{props.char.name}</div>
     <div className="char1">{props.char.birth_year}</div>
     <div className="char1">{props.char.eye_color}</div>
     <div className="char1">{props.char.gender}</div>
     </div>)
}

export default Char; 