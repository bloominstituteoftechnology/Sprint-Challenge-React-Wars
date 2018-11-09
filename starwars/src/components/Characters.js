import React from "react";

const Characters = props => {
  return (
    <React.Fragment>
      <h1 className="name">{props.characters.name}</h1>
      <h3>
        Height: {props.characters.height}cm Mass: {props.characters.mass}kg <br/>
        Hair Color: {props.characters.hair_color}<br/>
        Skin Color: {props.characters.skin_color}<br/>
        Eye Color: {props.characters.eye_color}<br/>
        Birth Year: {props.characters.birth_year}<br/>
        Gender {props.characters.gender}<br/>
        Home World: {props.characters.homeworld}<br/>
        Films: {props.characters.films}<br/>
        Species: {props.characters.species}<br/>
        Vehicles: {props.characters.vehicles}<br/>
        Starships: {props.characters.starships}<br/>
        Created At: {props.characters.created}<br/>
        Edited At: {props.characters.edited}<br/>
        Url: {props.characters.url}<br/>
      </h3>
    </React.Fragment>
  );
};

export default Characters;
