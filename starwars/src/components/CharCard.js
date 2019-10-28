import React from 'react';

const CharCard = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.gender}</p>
        </div>
    )
};

export default CharCard;