import React from 'react'
import './StarWars.css';

const Character = ({character}) =>{
    // console.log('here I am in character');
    // //for each character object create a list item for all properties
    // console.log('in character',character);
    // const charPropsList = character.map(charProp =>{
    //     return <li>{charProp}</li>
    // })

    return (
        <div className="character-container">
            <div className="character-card">
                <h3>{character.name}</h3>
                <ul className="character-props">
                    <li><span>Gender:</span>{character.gender}</li>
                    <li><span>Birth Year:</span>{character.birth_year}</li>
                    <li><span>Height:</span>{character.height}</li>
                    <li><span>Eye Color:</span>{character.eye_color}</li>
                </ul>
            </div>

        </div>

    )
}

export default Character;