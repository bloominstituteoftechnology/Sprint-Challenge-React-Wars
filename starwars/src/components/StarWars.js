import React from 'react';
import StarWarsCard from './StarWarsCard';

const starWars = props => {
    return (
        <div className="starwars"> {
            props.starwarsChars.map((item, index) => {
                return (
                    <StarWarsCard
                        key={index}
                        id={index}
                        birthYear={item.birth_year}
                        created={item.created}
                        edited={item.edited}
                        eyeColor={item.eyeColor}
                        films={item.films}
                        gender={item.gender}
                        hairColor={item.hair_color}
                        height={item.height}
                        homeworld={item.homeworld}
                        mass={item.mass}
                        name={item.name}
                        skin_color={item.skin_color}
                        species={item.species}
                        starships={item.starships}
                        url={item.url}
                        vehicles={item.vehicles}
                    />                  
                );
            })
        }
        </div>
    );
};

export default starWars;