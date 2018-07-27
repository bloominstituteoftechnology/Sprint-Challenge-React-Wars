import React from 'react';

const Char = props =>{
    return (
    <div className="starWars">
     <div className="char1">{props.char.name}</div>
     <div className="char2">{props.char.birth_year}</div>
     <div className="char3">{props.char.eye_color}</div>
     <div className="char4">{props.char.gender}</div>
     </div>)
}

export default Char; 