import React from "react";

const Homeworld = props => {
  return (
    <div className="homeworld">
      <h4>Homeworld</h4>
      <div className="homeworld-details">
        <p>Name: {props.homeworld.name}</p>
        <p>Rotation Period: {props.homeworld.rotation_period}</p>
      </div>
    </div>
  );
};

export default Homeworld;
