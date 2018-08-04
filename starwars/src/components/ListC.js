import React from "react";

const ListC = props => {
  return (
    <div>
      <h1> Star Wars Character</h1>
      <div> Name: {props.charObject.name} </div>
      <div>Gender: {props.charObject.gender} </div>
      <div> Eye Color: {props.charObject.eye_color} </div>
      <div> Height: {props.charObject.height} </div>
      <div> Home World: {props.charObject.homeworld} </div>
    </div>
  );
};

export default ListC;
