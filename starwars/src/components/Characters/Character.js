import React from 'react';

const Character = props => {
    return (
        <div className="character-container">
           <h2 onClick={props.selected}>
                {props.name}
           </h2>
           <p>About Me:</p>
           <ul>
               <li>
                   Gender: {props.gender}
               </li>
               <li>
                   Birthday: {props.birth_year}
               </li>
               <li>
                   Hair Color: {props.hair_color}
               </li>
               <li>
                    Eye Color: {props.eye_color}
               </li>
               <li>
                   Mass: {props.mass}
               </li>
               <li>
                   Height: {props.height}
               </li>
           </ul>
       
        </div>
    );
}
export default Character;