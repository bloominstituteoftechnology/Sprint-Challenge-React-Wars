import React from "react";
import "./Person.css";

// Components
import PersonLooks from "./PersonLooks";
import PersonMeasurements from "./PersonMeasurements";

const Person = props => {
  return (
    <div className="person">
      <h2>{props.person.name}</h2>
      <h3>
        {props.person.gender} - {props.person.birth_year}
      </h3>
      <PersonLooks person={props.person} />
      <PersonMeasurements person={props.person} />
    </div>
  );
};

export default Person;
