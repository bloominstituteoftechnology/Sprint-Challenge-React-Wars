import React from "react";
import "./Person.css";

const Person = props => {
  return (
    <div className="person">
      <h2>{props.person.name}</h2>
    </div>
  );
};

export default Person;
