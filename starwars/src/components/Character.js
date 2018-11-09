import React from "react";
import './StarWars.css';

const Characters = props => {
//   console.log(props);
  return (
    <div className ="char">
      <h2 className="name">{props.name}</h2>
      <p className="attributes">
        Height:{props.height} <br />
        Weight:{props.mass} <br />
        gender:{props.gender} <br />
        Hair: {props.hairColor} <br />
        Skin:{props.skinColor} <br />
        Eyes:{props.eyeColor} <br />
        Birth Year:{props.birthYear} <br />
        Created:{props.created} <br />
        Edited:{props.edited} <br />
      </p>
    </div>
  );
};

export default Characters;
