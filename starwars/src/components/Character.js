import React from 'react';

const Character = (props) => {
    return ( 
        <div className="individual-character">
            {props.character.name}
            {props.character.gender}
            {props.character.birth_year}
            {props.character.height}
            {props.character.eye_color}
            {props.character.hair_color}
            {props.character.skin_color}
        </div>
     );
}
 
export default Character;