import React from 'react';
import './StarWars.css';

const Chars = props => {
    return(
        <div className="chars-container">
            <h1 className="chars-name">Name:{props.Chars.name}</h1>
            <p className="chars-birth_year">Birth year:{props.Chars.birth_year}</p>
            <p className="chars-height">Height:{props.Chars.height}</p>
            <p className="chars-gender">Gender:{props.Chars.gender}</p>
            <p className="chars-eye_color">Eye color:{props.Chars.eye_color}</p>
        </div>
    )
}

export default Chars;
