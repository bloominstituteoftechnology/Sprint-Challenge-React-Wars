import React from 'react';

const Cards = props => {
    return (
        <div className = 'cards'>
            <ul>
                <h3> {props.data.name}</h3>
                    <li>Gender: {props.data.gender}</li>
                    <li>Hair Color: {props.data.hair_color}</li>
                    <li>Eye Color: {props.data.eye_color}</li>
                    <li>Height: {props.data.height}</li>
                    <li>Skin Color: {props.data.skin_color}</li>
            </ul>
        </div>
    )
}
export default Cards;