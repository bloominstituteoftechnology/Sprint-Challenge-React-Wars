import React, { Component } from 'react';
import './StarWars.css';

const Card = props => {
    return (
        <div className = 'card'>
            {props.starwarsChars.map(content => {
                return (
                <div className = 'card-content'>
                    <h2>{content.name}</h2>
                    <h3>About</h3>
                    <p className ='info'>Birthyear</p>
                    <p>{content.birth_year}</p>
                    <p className ='info'>Gender:</p>
                    <p>{content.gender}</p>
                    <p className ='info'>Height:</p>
                    <p>{content.height}cm</p>
                    <p className ='info'>Weight:</p>
                    <p>{content.mass}kg</p>
                    <p className ='info'>Hair Color:</p>
                    <p >{content.hair_color}</p>
                    <p className ='info'>Eye color:</p>
                    <p>{content.eye_color}</p>
                    <p className ='info'>Skin Color:</p>
                    <p>{content.skin_color}</p>
                </div>
                );
            })};
        </div>

    );
}

export default Card;