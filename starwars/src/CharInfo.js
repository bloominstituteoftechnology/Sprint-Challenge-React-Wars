import React from 'react'
import './App.css';


const CharInfo = props => {
    return (
        <div className="CharacterWrapper">
        <div className ="miniWrap">
            <h1 className="CharacterName">{props.characterData.name}</h1>
            <div className="StatStyle">
            <p className="CharStats">Birth Year: {props.characterData.birth_year}</p>
            <p className="CharStats">Eye Color: {props.characterData.eye_color}</p>
            <p className="CharStats">Gender: {props.characterData.gender}</p>
            <p className="CharStats">Mass: {props.characterData.mass}</p>
            <p className="CharStats"> Skin Color: {props.characterData.skin_color}</p>

            </div>
            </div>
        </div>
    );
};

export default CharInfo;