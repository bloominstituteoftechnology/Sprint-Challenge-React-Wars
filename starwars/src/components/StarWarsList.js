import React from "react";
import StarWars from "./StarWars";

const StarWarsList = props => {
  return (
    <div>
      {props.data.map((x, index) => {
        return (
          <StarWars data={x} key={index}/>
        )
      })}
    </div>
  )
}

export default StarWarsList;