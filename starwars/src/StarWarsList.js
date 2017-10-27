import React from 'react';
import './StarWarsList.css';

const StarWarsList = (props) => {
    return (
        <div className="StarWarsList">
            {props.starwarsChars.map((starwarsDetail) => {
                return (
                    <div className="StarWarsList__Chars">
                        <h2>{starwarsDetail.name}</h2>
                        <div className="Details">
                            <ul>
                            <h4>Physical Attributes</h4>
                                <li>Birthyear: {starwarsDetail.birth_year}</li>
                                <li>Gender: {starwarsDetail.gender}</li>
                                <li>Height: {starwarsDetail.height}</li>
                                <li>Mass: {starwarsDetail.mass}</li>
                                <li>Eye-Color: {starwarsDetail.eye_color}</li>
                                <li>Hair-Color: {starwarsDetail.hair_color}</li>
                                <li>Skin-Color: {starwarsDetail.skin_color}</li>
                            </ul>
                        </div><div className="Details">
                            <ul>
                            <h4>Critical Stats</h4>
                                <li>Films: {starwarsDetail.films.length}</li>
                                <li>Starships: {starwarsDetail.starships.length}</li>
                                <li>Vehicles: {starwarsDetail.vehicles.length}</li>
                            </ul>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default StarWarsList;