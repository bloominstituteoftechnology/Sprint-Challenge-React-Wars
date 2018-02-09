import React from "react";

function Cards(props) {
  return (
    <div className="cards">
      <div className="cards__row1">

        <div className="cards__container">
          <p className="cards__container__header">{props.chars[0].name}</p>
        </div>

        <div className="cards__container">
          <p className="cards__container__header">Name</p>
        </div>
      </div>
    </div>
    )
}

export default Cards;