import React from 'react';

import './StarWars.css';

const StarWarsChar = (props) => {
    return(
        <section className='char-container'>
            <div className='char-card'>
                <div className="char-name">{ props.charProps.name }</div>
                
                <div className="char-gender-birthyear">Gender: <span>{ props.charProps.gender }</span></div>
                <div className="char-gender-birthyear">Birth year: <span>{ props.charProps.birth_year }</span></div>
                <hr />
                <div className="char-stats">Height: <span>{ props.charProps.height } m</span></div>
                <div className="char-stats">Mass: <span>{ props.charProps.mass } kg</span></div>
                <hr />
                <div className="char-stats">Hair color: <span>{ props.charProps.hair_color }</span></div>
                <div className="char-stats">Skin color: <span>{ props.charProps.skin_color }</span></div>
                <div className="char-stats">Eye color: <span>{ props.charProps.eye_color }</span></div>
            </div>
        </section>
    );
} // StarWarsChar

export default StarWarsChar;
