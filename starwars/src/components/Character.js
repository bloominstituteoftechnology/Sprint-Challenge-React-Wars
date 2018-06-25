import React from "react";

// const Character = props => {
//     return (
//         <ul>
//         {props.swcharacters.map(char => {
//             return <li key= {Math.random()}> {char} </li>;
//         })}
//         </ul>
//     );
// };

const Character = props => {
    return (
        <div className = "char-card-container">

            <div className = "name-header"> 
                {props.singleCharacter.name}
            </div>

            <div className = "char-info">
                <li> birth year: {props.singleCharacter.birth_year} </li>
                <li> eye color: {props.singleCharacter.eye_color} </li>
                <li> gender:{props.singleCharacter.gender} </li>
                <li> hair color: {props.singleCharacter.hair_color} </li>
                <li> height: {props.singleCharacter.height} [cm] </li>
                <li> mass: {props.singleCharacter.mass} [kg] </li>
                <li> skin color: {props.singleCharacter.skin_color} </li>
            </div>
        </div>
    );
}

export default Character;