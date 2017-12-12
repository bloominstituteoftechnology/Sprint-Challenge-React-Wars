import React from 'react';
import './CharacterCard.css';

const CharacterCard = ({starwarsData}) => {
    return (
        <div>
            <div className="CharacterCard">
                <div> Name: {starwarsData.name} </div>
                <div> Birth Year: {starwarsData.birth_year} </div>
                <div> Eye Color: {starwarsData.eye_color} </div>
            </div>
        </div>
    )
}

export default CharacterCard;