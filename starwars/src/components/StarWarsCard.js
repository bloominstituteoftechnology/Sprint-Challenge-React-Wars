import React from 'react';

import './StarWars.css';

const starWarsCard = props => {
    return (
        <div className="starwars-card">
            {props.birthYear}
            {/* {props.created} */}
        </div>
    );
};

export default starWarsCard;