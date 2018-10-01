import React from 'react';
import './StarWars.css';

const Character = (props) => {
    return (
        <div className="card-container">
            <h1>Lets find out about {props.obj.name}!</h1>
            <div className="attributes">
                <div className="char-name">{props.obj.name}</div>
                <div><h3>DOB: ↓</h3> <span className="attribute">{props.obj.birth_year}</span></div>
                <div><h3>Eye Color: ↓ </h3> <span className="attribute">{props.obj.eye_color}</span></div>
                <div><h3>Gender: ↓</h3> <span className="attribute">{props.obj.gender}</span></div>
                <div><h3>Hair Color: ↓</h3> <span className="attribute">{props.obj.hair_color}</span></div>
                <div><h3>Height: ↓</h3> <span className="attribute">{props.obj.height}</span></div>
                <div><h3>Mass: ↓</h3> <span className="attribute">{props.obj.mass}</span></div>
                <div><h3>Skin Type: ↓</h3> <span className="attribute">{props.obj.skin_color}</span></div>
            </div>
        </div>
    )
}


export default Character;