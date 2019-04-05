import React from 'react'
import './StarWars.css';

const CharacterCard = props => {
    return (
        <div>
            <img src={props.pic} alt="#" />
            <table>
                
                {console.log(props.character)}

                <tr>
                    <th>Name:</th>
                    <td>{props.character.name}</td>
                </tr>
                <tr>
                    <th>Birth Year:</th>
                    <td>{props.character.birth_year}</td>
                </tr>
                <tr>
                    <th>Gender:</th>
                    <td>{props.character.gender}</td>
                </tr>
                <tr>
                    <th>Height:</th>
                    <td>{props.character.height}</td>
                </tr>
                <tr>
                    <th>Eye Color:</th>
                    <td>{props.character.eye_color}</td>
                </tr>
                <tr>
                    <th>Hair Color:</th>
                    <td>{props.character.hair_color}</td>
                </tr>
                <tr>
                    <th>Mass:</th>
                    <td>{props.character.mass}</td>
                </tr>
                <tr>
                    <th>Skin Color:</th>
                    <td>{props.character.skin_color}</td>
                </tr>

            </table>
        </div>
    );
}

export default CharacterCard;