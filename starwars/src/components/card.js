import React from 'react';
const Card = props =>{
    return(
        <div className="card">
            <h3>{props.charInfo.name}</h3>
            <p>Gender:{props.charInfo.gender}</p>
            <p>Height:{props.charInfo.height}</p>
            <p>Birth Year: {props.charInfo. birth_year}</p>
        </div>
    );
}

export default Card;