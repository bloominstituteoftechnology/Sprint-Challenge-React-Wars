import React from 'react';
import './StarWars.css';
import uuidv4 from 'uuid/v4';

export default function StarwarsCharacter(props) {

  const { birth_year, created, edited, eye_color, films, gender, hair_color, height, homeworld, mass, name, skin_color, species, starships, url, vehicles } = props.char;
  const proNoun = gender === 'male' ? 'he' : 'she';
  const proNounUpperCase = proNoun[0].toUpperCase() + proNoun.slice(1, proNoun.length);

  return (
    <div className="character">
      <div className="backdrop"></div>
      <div className="info">
        <h2>Biography: {name}</h2>
        <p style={{color: eye_color}}>This character's name is {name}. {proNounUpperCase} was born in the year {birth_year}. You can find their home planet at <a href={`${homeworld}`}>this link</a>. Their eye color is the color of this text, if text is white then the color wasn't provided by the starwars API. Their hair color is {hair_color}; furthermore, the text has been desaturated to better match the background image. They stand at {height}cm tall, and have a mass of {mass}kg. You can learn more about {proNoun} species at <a href={`${species}`}>here</a>. Their skin color is {skin_color}</p>

        <h3>Films</h3>
        {films.map((film, i) => {
          return (
            <li key={uuidv4()}><a href={film}>Film {i+1}</a></li>
          )
        })}

        <h3>Star Ships & Vehicles <small>(if any)</small></h3>
        {vehicles.map((v, i) => <a key={uuidv4()} href={v}>Vehicle {i+1} </a>)}
        {starships.map((s, i) => <a key={uuidv4()} href={s}>Ship {i+1} </a>)}
        <p><small>Created: {created}</small></p>
        <p><small>Edited: {edited}</small></p>
        <p><small><a href={url}>Source</a></small></p>
      </div>
    </div>
  )
}