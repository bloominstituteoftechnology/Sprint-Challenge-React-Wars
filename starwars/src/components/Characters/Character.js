import React from 'react';

const Character = props => {
    return(
        <div>
            <h1>{props.charData.name}</h1>
            <ul>
                <li>Born : {props.charData.birth_year}</li>
                <li>Gender : {props.charData.gender}</li>
                <li>Height : {props.charData.height}</li>
                <li>Mass : {props.charData.mass}</li>
                <li>Eye Color : {props.charData.eye_color}</li>
                <li>Hair Color : {props.charData.hair_color}</li>
                <li>Skin Color : {props.charData.skin_color}</li>
            </ul>
        </div>
    )
}

export default Character;