import React from "react";
import StarCard from "./StarCard";

const CardContainer = props => {
  return (
    <div className="container">
      {props.swChars.map(createChar => (
        <StarCard
          infoToggle={props.infoToggle}
          key={createChar.create}
          eachChar={createChar}
          open={props.open}
        />
      ))}
    </div>
  );
};

export default CardContainer;