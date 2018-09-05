import React from 'react';
import StarWarsDisplay from './StarWarsDisplay';

import './StarWars.css';

const starWarsCard = props => {
    return (
        <div className="card-container">
            <div className="card">
                <div className="char">
                    {/* <StarWarsDisplay
                        name={props.name}
                        birthYear={props.birthYear}
                        eyeColor={props.eyeColor}
                        gender={props.gender}
                        hairColor={props.hairColor}
                        height={props.height}
                        mass={props.mass}
                        skinColor={props.skinColor}
                        species={props.species}
                        homeworld={props.homeworld}
                        created={props.created}
                        edited={props.edited}
                        url={props.url}
                    /> */}
                    <h1>{props.name}</h1>
                    <p>birthYear={props.birthYear}</p>
                    <p>eyeColor={props.eyeColor}</p>
                    <p>gender={props.gender}</p>
                    <p>hairColor={props.hairColor}</p>
                    <p>height={props.height}</p>
                    <p>mass={props.mass}</p>
                    <p>skinColor={props.skinColor}</p>
                    <p>species={props.species}</p>
                    <p>homeworld={props.homeworld}</p>
                    <p>created={props.created}</p>
                    <p>edited={props.edited}</p>
                    <p>url={props.url}</p>
                </div>
                <div className="card-img">
                    {props.films.map((film, index) => {
                        return (
                            <StarWarsDisplay
                                key={index}
                                film={film}  
                            />
                        );
                    })}
                    {props.starships.map((starship, index) => {
                        return (
                            <StarWarsDisplay
                                key={index}
                                starship={starship}
                            />
                        );
                    })}
                    {props.vehicles.map((vehicle, index) => {
                        return (
                            <StarWarsDisplay
                                key={index}
                                vehicle={vehicle}  
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default starWarsCard;