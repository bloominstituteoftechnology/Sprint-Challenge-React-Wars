import React from 'react';

import './StarWars.css';

const StarWarsChar = (props) => {
    // console.log(props)
    return(
        <section className='char-container'>
            <div className='char-card'>
                <div className="char-name-gender">{props.charProps.name}</div>
                <div className="char-name-gender">Gender: {props.charProps.gender}</div>
                <hr />
                <div className="char-stats">Height: {props.charProps.height}</div>
                <div className="char-stats">Mass: {props.charProps.mass}</div>
                <div className="char-stats">Birth year: {props.charProps.birth_year}</div>
                <hr />
                <div className="char-stats">Hair color: {props.charProps.hair_color}</div>
                <div className="char-stats">Skin color: {props.charProps.skin_color}</div>
                <div className="char-stats">Eye color: {props.charProps.eye_color}</div>
                <hr />
                <div className="char-home-world">Home world: {props.charProps.eye_color}</div>
            </div>
        </section>
    );
} // StarWarsChar

export default StarWarsChar;
