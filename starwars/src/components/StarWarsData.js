import React from 'react';
import './StarWars.css';

const Makers = props => {
    return(
        <div className="makers-container">
            <h1 class="makers-name">Name:{props.Makers.name}</h1>
            <p class="makers-birth_year">Birth year:{props.Makers.birth_year}</p>
            <p class="makers-height">Height:{props.Makers.height}</p>
            <p class="makers-gender">Gender:{props.Makers.gender}</p>
            <p class="makers-eye_color">Eye color:{props.Makers.eye_color}</p>
        </div>
    )
}

export default Makers;
