import React from 'react';
import './card.css'

function Card(props) {
    const side = props.index;
    
    return (
        <div className="Card" style={side === 3 ? {background:'darkred', color:'white'} : {background:'lightblue', color:'black'}}>
            <h1>{props.character.name}</h1>
            <div className="Card-Info-Block">
                <div className="Card-Info-Item">Gender: {props.character.gender}</div>
                <div className="Card-Info-Item">Born: {props.character.birth_year}</div>
                <br /><br />
                <div>Skin Color: {props.character.skin_color}</div>
                <div>Eye Color: {props.character.eye_color}</div>
                <div>Hair Color: {props.character.hair_color}</div>
                <br /><br />
                <div className="Card-Info-Item">Height: {props.character.height}</div>
                <div className="Card-Info-Item">Mass: {props.character.mass}</div>
            </div>
        </div>
    );
}

export default Card;