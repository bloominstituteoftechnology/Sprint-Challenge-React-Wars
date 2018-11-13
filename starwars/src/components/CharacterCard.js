import React from 'react';

function CharacterCard(props) {
  
  var index = props.character.homeworld;
  index = props.character.homeworld[index.length-2];
  var planetIndex = Number(index)+1;
 
  return (
    <div className="card-container">
    	<div className="header">{props.character.name}</div>
      <div className="bio-container">
        <h2>Bio Stats:</h2>
        <p>Birth Year: {props.character.birth_year}</p>
        <p>Eye Color: {props.character.eye_color}</p>
        <p>Gender: {props.character.gender}</p>
        <p>Hair Color: {props.character.hair_color}</p>
        <p>Height: {props.character.height}</p>
        <p>Mass: {props.character.mass}</p>
        <p>Skin Color: {props.character.skin_color}</p>
        <p>Homeworld: {props.character.homeworld}</p>
      </div>
      <div className="xenobiology-container">
        <h2>Species:</h2>
        {props.character.speciesNames.map(species => <div key={species}>{species}</div>)}
      </div>
      <div className="starships-container">
        <h2>Starships Piloted:</h2>
        {props.character.starshipNames.map(starship => <div key={starship}>{starship}</div>)}
      </div>
      <div className="vechiles-container">
        <h2>Other Vechiles Piloted:</h2>
        {props.character.vehicleNames.map(vehicle => <div key={vehicle}>{vehicle}</div>)}
      </div>
      <div className="films-container">
        <h2>Films Appeared In:</h2>
        {props.character.filmTitles.map(film => <div key={film}>{film}</div>)}
      </div>
    </div>
  );
}

export default CharacterCard;

/*

--example json--

birth_year: "19BBY"
created: "2014-12-09T13:50:51.644000Z"
edited: "2014-12-20T21:17:56.891000Z"
eye_color: "blue"
films: Array(5)
0: "https://swapi.co/api/films/2/"
1: "https://swapi.co/api/films/6/"
2: "https://swapi.co/api/films/3/"
3: "https://swapi.co/api/films/1/"
4: "https://swapi.co/api/films/7/"
length: 5
__proto__: Array(0)
gender: "male"
hair_color: "blond"
height: "172"
homeworld: "https://swapi.co/api/planets/1/"
mass: "77"
name: "Luke Skywalker"
skin_color: "fair"
species: Array(1)
0: "https://swapi.co/api/species/1/"
length: 1
__proto__: Array(0)
starships: Array(2)
0: "https://swapi.co/api/starships/12/"
1: "https://swapi.co/api/starships/22/"
length: 2
__proto__: Array(0)
url: "https://swapi.co/api/people/1/"
vehicles: Array(2)
0: "https://swapi.co/api/vehicles/14/"
1: "https://swapi.co/api/vehicles/30/"

 */