import React, {Component} from 'react';
import './card.css'

function Card(props) {
    return (
        <div className="Card">
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
                <div className="Card-Info-Item">Weight: {props.character.mass}</div>
            </div>
        </div>
    );
}

export default Card;

/*

films:Array[5]
species:Array[1]
starships:Array[2]
vehicles:Array[2]
*/