import React, {Component} from 'react';

function Card(props) {
    return (
        <div>
            <h1>{props.character.name}</h1>
            <div>Gender: {props.character.gender}</div>
            <div>Born: {props.character.birth_year}</div>
            <div>Skin Color: {props.character.skin_color}</div>
            <div>Eye Color: {props.character.eye_color}</div>
            <div>Hair Color: {props.character.hair_color}</div>
            <div>Height: {props.character.height}</div>
            <div>Weight: {props.character.mass}</div>
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