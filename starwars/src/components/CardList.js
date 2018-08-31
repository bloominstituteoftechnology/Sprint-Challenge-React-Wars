// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Card from "./Card";

function CardList(props) {
  return <ul>{props.cards.map((card, i) => <Card
    card={card}
    key={props.cards[i]}/>)}
    </ul>
}

export default CardList;