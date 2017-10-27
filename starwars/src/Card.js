import React from 'react';
import logo from './swlogo.png';
import swfont from './swtext.png';
import './Card.css';

const Card = (props) => {
    return (<div className="thumbnail">
            <h2>{props.char.name}</h2>
            <img className="thumbnail-logo" src={logo} />
            <div className="thumbnail-container">
                <h3><span>gender:</span> {props.char.gender}</h3>
                <h3><span>height:</span> {props.char.height}</h3>
                <h3><span>mass:</span> {props.char.mass}</h3>
                <h3><span>birth year:</span> {props.char.birth_year}</h3>
                <h3><span>eye color:</span> {props.char.eye_color}</h3>
                <h3><span>hair color:</span> {props.char.hair_color}</h3>
                <h3><span>skin color:</span> {props.char.skin_color}</h3>
            </div>
            <img className="thumbnail-logo-text" src={swfont} />
            </div>);
};

export default Card;