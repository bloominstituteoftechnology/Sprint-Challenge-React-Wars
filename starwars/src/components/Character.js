
import React from 'react';
import Header from './Header';
import CharacterInfo from './CharacterInfo';

const Character = props => {
    return (
        <div className = "character" >
        <Header header = {props.header} />
        <CharacterInfo birthYear = {props.birthYear}
                    gender = {props.gender}
                    eyeColor = {props.eyeColor}
                    hair = {props.hair}
                    height = {props.height}
                    mass = {props.mass}
                    />
        </div>
    )
}

export default Character; 