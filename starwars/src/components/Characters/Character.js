import React from 'react';

const Character = props => {
    return(
        <div className="character">
            <h1>{props.charData.name}</h1>
            <div className="attribute-list">
                <p>Born : {props.charData.birth_year}</p>
                <p>Gender : {props.charData.gender}</p>
                <p>Height : {props.charData.height}</p>
                <p>Mass : {props.charData.mass}</p>
                <p>Eye Color : {props.charData.eye_color}</p>
                <p>Hair Color : {props.charData.hair_color}</p>
                <p>Skin Color : {props.charData.skin_color}</p>
            </div>
        </div>
    )
}

export default Character;