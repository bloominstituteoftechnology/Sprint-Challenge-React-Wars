import React from 'react';

const CharCard = props => {
    return (
        <div className="char-card">
        <div className="title">
        <h3>{props.name}</h3>
        </div>
        <h6>Height: {props.height}</h6>
        <h6>Mass: {props.mass}</h6>
        <h6>Hair Color: {props.hairColor}</h6>
        <h6>Skin Color: {props.skinColor}</h6>
        <h6>Eye Color: {props.eyeColor}</h6>
        <h6>Birth Year: {props.birthYear}</h6>
        <h6>Gender: {props.gender}</h6>

        </div>
    );
};

export default CharCard;