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
            {props.singleCharacter.name}
            {props.singleCharacter.height}
        </div>
    );
}

export default Character;