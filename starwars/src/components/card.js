import React from 'react';

import './card.css'

function Card(props) {
    const card = props.card;
    return(
        <div className="Card">
            <h3>{card.name}</h3>
            <table className="CardTable">
                <tr>
                    <td>{card.birth_year}</td>
                    <td>{card.mass} kg</td>
                    <td>{card.height} cm</td>
                </tr>
                <tr>
                    <td>{card.gender}</td>
                    <td>{card.hair_color} hair</td>
                    <td>{card.eye_color} eyes</td>
                </tr>
            </table>
        </div>
    )
}

export default Card;
