import React from 'react';

const Character = props => {
    return(
        <div>
            <h3>{props.singleChar.name}</h3>
            <p>YEAR OF BIRTH: {props.singleChar.birth_year}</p>
            <p>EYE COLOR: {props.singleChar.eye_color}</p>
            <p>HAIR COLOR: {props.singleChar.hair_color}</p>
            <p>SKIN COLOR: {props.singleChar.skin_color}</p>
            <p>HEIGHT: {props.singleChar.height} CM</p>
            <p>MASS: {props.singleChar.mass} KG</p>
            <p>GENDER: {props.singleChar.gender}</p>
            <p>DATA CREATED: {props.singleChar.created}</p>
            <p>LAST EDITED: {props.singleChar.edited}</p>
        </div>
    );
}

export default Character;