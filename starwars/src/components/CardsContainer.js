import React from "react";
import StarCard from "./StarCard";
import "./CardsContainer.css";

const CardsContainer = props => {
  return (
    <div className="cards-container">
      {props.swd.map((each, i) => (
        <div key={i}>
          <div className="each-card">{props.facePics[i]}</div>
          <StarCard charData={each} />
        </div>
      ))}
    </div>
  );
};

export default CardsContainer;
