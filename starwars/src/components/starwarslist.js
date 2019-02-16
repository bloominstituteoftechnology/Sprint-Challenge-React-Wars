import React from "react";
import StarWars from "./starwars";

// import Item from './Item';

const StarWarsList = props => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className="starwars-list">
      {props.characters.map(each => (
        <StarWars character={each} />
      ))}
    </div>
  );
};

export default StarWarsList;
