import React from 'react';
import './CharacterCard.css';

const CharacterCard = (props) => {
    return (
        <div className="cards">
            <div className="card">
                <h2>{props.character.name}</h2>
                    <div className='stats'>
                        <div className="vitals">
                            <h3>Vitals: </h3>
                                <p>Gender: {props.character.gender}</p>
                                <p>Birth Year: {props.character.birth_year}</p>
                                <p>Height: {props.character.height}</p>
                                <p>Mass: {props.character.mass}</p>
                                <p>Hair Color: {props.character.hair_color}</p>
                                <p>Eye Color: {props.character.eye_color}</p>
                                <p>Skin Color:{props.character.skin_color}</p>
                        </div>
                        <div className="bottom">    
                            <div className="misc">         
                                <h3>Misc: </h3>
                                    <p>Home World: {props.character.homeworld}</p>
                            </div>
                            <div className="vehicles"> 
                            <h4>Known Vehicles:</h4>
                                <p>Starships: {props.character.starships}</p>
                                <p>Vehicles: {props.character.vehicles}</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default CharacterCard;