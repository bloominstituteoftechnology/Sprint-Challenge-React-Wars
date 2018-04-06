import React from "react";
import "./DisplayItem.css";

const DisplayItem = props => {
  return (
    <li className="item">
      <div className="item_title">{props.title}:</div>
      <div>{props.data}</div>
    </li>
  );
};

export default DisplayItem;
