import React from 'react';
import './StarWars.css';

const StarWarsChar = props => {
    return (
        <div className="character-profile">
            <h2>{props.name}</h2>
            <div className="info-box">
                <h4>Statistical Data</h4>
                <p>Birth year: {props.birth_year}</p>
                <p>Homeworld: {props.homeworld}</p>
                <p>Species: {props.species[0]}</p>
                <p>Gender: {props.gender}</p>
            </div>
            <div className="info-box">
                <h4>Physical Characteristics</h4>
                <p>Hair color: {props.hair_color}</p>
                <p>Eye color: {props.eye_color}</p>
                <p>Skin color: {props.skin_color}</p>
                <p>Height: {props.height}cm</p>
                <p>Mass: {props.mass}kg</p>
            </div>
            <div className="info-box">
                <h4>Vehicle Ownership</h4>
                <p>Starships owned:</p>
                    <ul>
                        <li>{props.starships[0]}</li>
                    </ul>
                <p>Vehicles owned:</p>
                    <ul>
                        <li>{props.vehicles[0]}</li>
                    </ul>
            </div>
            <div className="info-box">
                <h4>Theatrical Apperances</h4>
                <ul>
                    <li>{props.films[0]}</li>
                </ul>
            </div> 
            <div className="info-box">
                <h4>Entry Data</h4>
                <p>Entry created: {props.created}</p>
                <p>Entry modified: {props.edited}</p>
            </div>
        </div>
    )
}

StarWarsChar.defaultProps = {
    name: '',
    birth_year: '',
    homeworld: '',
    species: '',
    gender: '',
    hair_color: '',
    eye_color: '',
    skin_color: '',
    height: '',
    mass: '',
    starships: [],
    vehicles: [],
    films: [],
}

export default StarWarsChar;