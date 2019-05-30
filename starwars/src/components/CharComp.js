import React from 'react';



function CharComp(props) {
    return (
        props.data.map(character => {
            return (
                <div className='char' id={character.name} >
                    <h3>Name: {character.name}</h3>
                    <p>Height: {character.height}</p>
                    <p>Mass: {character.mass}</p>
                    <p>Hair Color: {character.hair_color}</p>

                    <p>Skin Color: {character.skin_color}</p>
                    <p>Birth year: {character.birth_year}</p>

                    <p>Eye Color: {character.eye_color}</p>
                    <p>Films: {character.films.map(film => {
                        return (
                        <li>{film}</li>
                    )
                    })}
                    </p>
                    <p>Gender: {character.gender}</p>
                    <p>Home worlcd: {character.homeworld}</p>

                    <p>Species: {character.species}</p>
                    <p>Starships: {character.starships.map(aShip => {
                        return (
                        <li>{aShip}</li>
                    )
                    })}</p>
                    <p>Vehicles: {character.vehicles.map(vehicles => {return (
                        <li>{vehicles}</li>
                    )})}</p>
                </div>
            );
        }))
        
};

export default CharComp;