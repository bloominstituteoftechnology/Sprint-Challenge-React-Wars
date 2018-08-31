import React from 'react';
import './StarWars.css';

function CharCard(props) {
    return (
        <div className='card'>
            <h2>{props.cardData.name}</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Birth Year</td>
                        <td>{props.cardData.birth_year}</td>
                        <td className='blank-cell'></td>
                        <td>Eye Color</td>
                        <td>{props.cardData.eye_color}</td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>{props.cardData.gender}</td>
                        <td className='blank-cell'></td>
                        <td>Hair Color</td>
                        <td>{props.cardData.hair_color}</td>
                    </tr>
                    <tr>
                        <td>Height</td>
                        <td>{`${props.cardData.height} cm`}</td>
                        <td className='blank-cell'></td>
                        <td>Mass</td>
                        <td>{`${props.cardData.mass} stones`}</td>
                    </tr>
                    <tr>
                        <td>Skin Color</td>
                        <td>{props.cardData.skin_color}</td>
                        <td className='blank-cell'></td>
                        <td className='blank-cell'></td>
                        <td className='blank-cell'></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}

export default CharCard;
