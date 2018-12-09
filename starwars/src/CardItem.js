import React from "react";

function CardItem(props) {
    return (
    <div className="characters">
      {props.starwarsChars.map(cardObjects => {
          return <div className="card" key={cardObjects.name} cardObjects={JSON.stringify(cardObjects)}>{cardObjects.name}</div>;
      })}
    </div>
    );
}

export default CardItem;
