import React from "react";
import './card.css';
export default ({ character }) => {
  const {
    name,
    birth_year,
    skin_color,
    mass,
    height,
    hair_color,
    eye_color,
    gender,
    films,
    starships,
    vehicles,
    homeworld
  } = character;
  return (
    <div className="character-card">
      <header>{name}</header>
      <section className="details">
        <ul>
            <li><span>Gender</span>{gender}</li>            
            <li><span>Birth Year</span>{birth_year}</li>
            <li><span>Eye Color</span>{eye_color}</li>
            <li><span>Hair Color</span>{hair_color}</li>
            <li><span>Skin Color</span>{skin_color}</li>
            <li><span>Height</span>{height}</li>
            <li><span>Mass</span>{mass}</li>
            { homeworld.name ? <li><span>Homeworld</span>{homeworld.name}</li> : null}
            { starships.length ? <li><span>Starships</span>{starships.length}</li> : null }
            { vehicles.length ? <li><span>Vehicles</span>{vehicles.length}</li> : null }
            { films.length ? <li><span>Films</span>{films.length}</li> : null }

        </ul>
      </section>
    </div>
  );
};
