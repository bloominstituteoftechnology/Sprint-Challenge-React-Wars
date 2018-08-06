import React from "react";
import StarCard from "./StarCard";

const CardsContainer = props => {
  return (
    <div className='cards-container'>
      {props.swd.map((each, i) => (
        <StarCard
        //   five={"5"}
        //   justus={"green"}
        //   dad={"blue"}
        //   Eric={"purple and gold"}
        charData={each}
        />
      ))}
    </div>
  );
};

export default CardsContainer;

// let props = {
//   // dad={'blue'},
//   justus: "green"
// };
