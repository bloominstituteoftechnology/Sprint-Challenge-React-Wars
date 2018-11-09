import React from "react";

const Characters = props => {
  return (
    <React.Fragment>
      <h1 className="name">{props.characters.name}</h1>
      <h3> Height: {props.characters.height}cm<br/></h3>
      <h3>Mass: {props.characters.mass}kg <br/></h3>
      <h3> Hair Color: {props.characters.hair_color}<br/></h3>
      <h3>Skin Color: {props.characters.skin_color}<br/></h3>
      <h3>Eye Color: {props.characters.eye_color}<br/></h3>
      <h3> Birth Year: {props.characters.birth_year}<br/></h3>
      <h3>  Gender: {props.characters.gender}<br/></h3>
      <h3> Home World: {props.characters.homeworld}<br/></h3>
      <h3 className='films'> 
        Films: {props.characters.films}<br/></h3>
      <h3>
        Species: {props.characters.species}<br/></h3>
      <h3> Vehicles: {props.characters.vehicles}<br/></h3>
      <h3>Starships: {props.characters.starships}<br/></h3>
      <h3>Created At: {props.characters.created}<br/></h3>
      <h3> Edited At: {props.characters.edited}<br/></h3>
      <h3> Url: {props.characters.url}<br/></h3>
    
    </React.Fragment>
  );
};

export default Characters;
