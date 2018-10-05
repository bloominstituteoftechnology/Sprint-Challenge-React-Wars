import React from "react";
import StarWars from "./StarWars";

const StarWarsList = props => {
  return (
    <div>
      {props.data.map(x => {
        return (
          <StarWars data={x} />
        )
      })}
    </div>
  )
}

export default StarWarsList;