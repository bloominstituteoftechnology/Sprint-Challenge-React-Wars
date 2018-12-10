import React from "react";
import '../characterComponent/StarWars.css'

const CharacterData = props => {
    const films = props.character.films;
    console.log(films)
    const filmArray = films.map( film => (
        <ul key={film.toString()}value={film}>{film}</ul>
    ))
 return (
     <ul className="list">
        <h3>Name: {props.character.name}</h3>
        <p>Year Born: {props.character.birth_year}</p>
        <p>Gender: {props.character.gender}</p>
        <ul className="films">Films: {filmArray}</ul>
     </ul>
 )
}

export default CharacterData;