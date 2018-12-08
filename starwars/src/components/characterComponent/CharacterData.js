import React from "react";

const CharacterData = props => {
    console.log("hello")
    console.log(props.character.films)
    const films = props.character.films;
    console.log(films)
    const filmArray = films.map( film => (
        <li key={film.toString()}value={film}>{film}</li>
    ))
 return (
     <ul>
        <h3>Name: {props.character.name}</h3>
        <p>age: {props.character.age}</p>
        <p>films: {filmArray}</p>
     </ul>
 )
}

export default CharacterData;