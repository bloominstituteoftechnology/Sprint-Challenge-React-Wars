import React from 'react';
import Species from '../Species/Species';
import Starships from '../Starships/Starships';
import Vehicles from '../Vehicles/Vehicles';
import Films from '../Films/Films';

const CharSelector = props => {
    return (
        <div>
            {props.swChars.map((char, index) => (
                <div key={char.created + index}>
                    <h2>{char.name}</h2>
                    <h4>{`Born: ${char.birth_year}`}</h4>
                    <h5>{`Gender: ${char.gender}`}</h5>
                    <h5>{`height: ${char.height}, mass: ${char.mass} `}</h5>
                    <h5>Skin Color: {char.skin_color}</h5>
                    <h5>Eye Color: {char.eye_color}</h5>
                    <Species species={char.species}/>
                    <Starships starships={char.starships}/>
                    <Vehicles vehicles={char.vehicles}/>
                    <Films films={char.films} />
                    <a href={char.url}>Website</a>
                    <p>HomePlanet: <img src={char.homeworld} alt='home planet'/></p>

                    {/* <Char /> */}
                </div>
            ))}
        </div>
    );
};

export default CharSelector;