import React from "react";
import StarCard from "./StarCard";
import './CardsContainer.css';

const CardsContainer = props => {
  return (
    <div className="cards-container">
      {props.swd.map((each, i) => (
        <div className="each-card" key={i}>
         {props.facePics[i]}
          <StarCard
            //   five={"5"}
            //   justus={"green"}
            //   dad={"blue"}
            //   Eric={"purple and gold"}
            charData={each}
          />
        </div>
      ))}
    </div>
  );
};

export default CardsContainer;

// let props = {
//   // dad={'blue'},
//   justus: "green"
// };
