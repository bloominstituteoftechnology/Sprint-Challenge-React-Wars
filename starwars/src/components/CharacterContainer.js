import React from 'react';
import CharacterCard from './CharacterCard';

//{buttonLabels.map(label => <CalcButton key={label} large={isLarge(label)} onClick={props.onClick} label={label} />)}

function CharacterContainer(props) {
  return (
     <div className="character-container">
     	{props.characters.map(character => <CharacterCard key={character.name} character={character} />)}
    </div>
  );
}

export default CharacterContainer;


/*

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