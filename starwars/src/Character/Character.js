 import React from 'react';
 import { Link } from 'react-router-dom';
 
 const character = () => {
   return <p>I'm a character!</p>
 }
 const CharacterCard = ({props}) => {
  const { name, species, gender, height, mass, skin_color, eye_color, hair_color, created, birth_year, homeworld, starships, vehicles, url } = props
  return(
    <div className="Note-row">
      <div className="NoteItem">
      <Link to={`/api/people/${props.name}`}>
        <div className="Note-header"><h3>{props.name}</h3>
        </div>
      </Link>
      <div className="Note-body">
        <div className="Sub-Header">Physical Characteristics</div>
          <p>Name: {props.name}</p>
          <p>Species: {props.species}</p>
          <p>Gender: {props.gender}</p>
          <p>Height: {props.height}</p>
          <p>Mass: {props.mass}</p>
          <p>Skin_Color: {props.skin_color}</p>
          <p>Eye_color: {props.eye_color}</p>
          <p>Hair_Color: {props.hair_color}</p>
        </div>
        <div className="Sub-Header">Demographic Data</div>
          <p>Created: {props.created}</p>
          <p>Birth Year: {props.birth_Year}</p>
          <p>Homeworld: {props.homeworld}</p>
          <p>Starships: {props.starships}</p>
          <p>Vehicles: {props.vehicles}</p>
          <p>Url: {props.url}</p>
        </div>
    </div>
  )
}
 export default character;