import React from 'react';
import './starwars.css';




const StarWarsData = (props) => {
return (
  <div>
    {props.starwarsChars.map((character, i) =>{
      return(

        <div key={character.id} className="starwars-design">

        <h3>Name : {character.name}</h3> 
        <p>Birth Year: {character.birth_year}</p> 
        <p>Created: {character.created}</p> 
        <p>Edited: {character.edited}</p> 
        <p>Eye Color: {character.eye_color}</p> 
        <p>Gender: {character.gender}</p> 
        <p>Hair Color: {character.hair_color}</p> 
        <p>Height: {character.height}</p> 
        <p>Mass: {character.mass}</p> 
        <p>Skin Color: {character.skin_color}</p>
        <p>Movies: {character.movies}</p>
        <p>Species: {character.species[i]}</p>  
        <p>Vehicles: {character.vehicles[i]}</p>
        <p>Home World: {character.home_world}</p> 
        <p>URL: <link rel="stylesheet" href={character.url}/>Click</p> 
        </div>
      );
      

    })
    }

  </div>

);

}


export default StarWarsData;