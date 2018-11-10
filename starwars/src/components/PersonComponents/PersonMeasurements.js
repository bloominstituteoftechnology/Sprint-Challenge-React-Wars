import React from "react";
import "./Person.css";

const PersonMeasurements = props => {
  return (
    <div className="person-measure">
      <p>
        <strong>Height:</strong> {props.person.height}
      </p>

      <p>
        <strong>Mass:</strong> {props.person.mass}
      </p>
    </div>
  );
};

export default PersonMeasurements;
