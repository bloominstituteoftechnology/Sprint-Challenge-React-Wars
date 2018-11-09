import React from "react";
import "./Person.css";

// Components
import PersonLooks from "./PersonLooks";

const Person = props => {
  return (
    <div className="person">
      <h2>{props.person.name}</h2>
      <PersonLooks person={props.person} />
    </div>
  );
};

export default Person;
