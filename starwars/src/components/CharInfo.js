import React from 'react';
import './StarWars.css';

const CharInfo = props => {
    return(
    <div>
        <div className={'charInfo'}>Birth: {props.charinfo.birth_year}</div>
        <div className={'charInfo'}>Eye Color: {props.charinfo.eye_color}</div>
        <div className={'charInfo'}>Gender: {props.charinfo.gender}</div>
        <div className={'charInfo'}>Hair Color: {props.charinfo.hair_color}</div>
        <div className={'charInfo'}>Height: {props.charinfo.height}</div>
        <div className={'charInfo'}>Mass: {props.charinfo.mass}</div>
    </div>
    )
};

export default CharInfo