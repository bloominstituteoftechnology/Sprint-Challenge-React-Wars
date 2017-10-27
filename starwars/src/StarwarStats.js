import React from 'react';
import './StarwarStats.css';

const StarwarStats = (props) => {
    return (
        <div className="CharacterCard" >
            {props.starwarsChars.map((character) => {
                return(
                    <div className="Character" key={character.id}>
                    
                    <h3> {character.name} </h3>
                    <img src = {character.url} alt="boohoo" className="img-responsive" />
                    <p>   
                        <strong>Birth Year: </strong>{character.birth_year}
                    </p>
                    <p>
                        <strong>Gender: </strong>{character.gender}
                    </p>
                    <p>
                        <strong>Date Created: </strong>{character.created}
                    </p>
                    <p>
                        <strong>Date Edited: </strong>{character.edited}
                    </p>
                    <p>
                        <strong>Homeworld: </strong> <img src = {character.homeworld} alt="boohoo" className="img-responsive" />
                    </p>
                    <p>
                        <strong>Movies: </strong>{character.films}
                    </p>
                    <p>
                        <strong>Species: </strong>{character.species}
                    </p>
                    <p>
                        <strong>Starships: </strong>{character.starships}
                    </p>
                    <p>
                        <strong>Vehicles: </strong>{character.vehicles}
                    </p>
                    <p>
                        <strong>Height: </strong>{character.height}
                    </p>
                    <p>
                        <strong>Mass: </strong>{character.mass}
                    </p>
                    <p>
                        <strong>Skin color: </strong>{character.skin_color}
                    </p>
                    <p>
                        <strong>Eye Color: </strong>{character.eye_color}
                    </p>

                    </div>
                );
            })}
        </div>
    );
}

export default StarwarStats;