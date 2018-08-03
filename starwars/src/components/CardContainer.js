import React from "react";
import StarCard from "./StarCard";
import "./StarWars.css"

const CardContainer = props => {
  return (
    <div className="container">
      {props.starwarsChars.map(createChar => (
        <StarCard
          eachChar={createChar}
        />
      ))}
    </div>
  );
};

export default CardContainer;