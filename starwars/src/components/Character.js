import React from 'react';

const Character = (props) => {
  return (
    <div className='character-data'>
      <div className='text'>
        <h3 id={props.id}>{props.charData.name}</h3>
        <li>Born on: {props.charData.birth_year}</li>
        <li>Eyes the color of: {props.charData.eye_color}</li>
        <li>Gender: {props.charData.gender}</li>
        <li>Hair the Color of: {props.charData.hair_color}</li>
        <li>{props.charData.height} Space-ship parts tall</li>
        <li>{props.charData.mass} Grains of sand from Tatoine-wide</li>
        <li>{props.charData.skin_color}: skin</li>

      </div>
    </div>
  );
}

export default Character;

/* 

birth_year:
"19BBY"
created:
"2014-12-09T13:50:51.644000Z"
edited:
"2014-12-20T21:17:56.891000Z"
eye_color:
"blue"
films:
Array[5]
gender:
"male"
hair_color:
"blond"
height:
"172"
homeworld:
"https://swapi.co/api/planets/1/"
mass:
"77"
name:
"Luke Skywalker"
skin_color:
"fair"
species:
Array[1]
starships:
Array[2]
url:
"https://swapi.co/api/people/1/"
vehicles:
Array[2]

*/