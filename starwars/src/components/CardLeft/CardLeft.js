import React from 'react';

const CardLeft = ({ swChars }) => {
    return (
    <div className="card__leftside">
        <div className="height_weight">
            <div>Height: { swChars.height }</div>
            <div>Mass: { swChars.mass }</div>
        </div>
        <div className="hair_skin_eyes">
            <div>Hair color: { swChars.hair_color }</div> 
            <div>Skin color: { swChars.skin_color }</div>
            <div>Eye color: { swChars.eye_color }</div>
        </div>
        <div className="birth_year_gender">
        <div>Birth year: { swChars.birth_year }</div>
        <div>Gender: { swChars.gender }</div>
        </div>
    </div>
    )
}

export default CardLeft;