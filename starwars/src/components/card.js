import React from 'react';
const Card = props =>{
    return(
        <div className="card">
            <h3>{props.charInfo.name}</h3>
            <p>Gender:{props.charInfo.gender}</p>
            <p>Born On:{props.charInfo.birthYear}</p>
        </div>
    );
}

export default Card;