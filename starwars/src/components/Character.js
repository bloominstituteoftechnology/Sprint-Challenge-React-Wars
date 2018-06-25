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
        <div>
            <div className = "name-header"> 
                {props.singleCharacter.name}
            </div>

            <div className = "char-info">
                birth year: {props.singleCharacter.birth_year}
                eye color: {props.singleCharacter.eye_color}
                gender:{props.singleCharacter.gender}
                hair color: {props.singleCharacter.hair_color}
                height: {props.singleCharacter.height} [cm]
            </div>
        </div>
    );
}

export default Character;