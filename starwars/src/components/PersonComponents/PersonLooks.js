import React from "react";
import "./Person.css";

const PersonLooks = props => {
  return (
    <div className="looks">
      <p>
        <strong>Hair Color:</strong> {props.person.hair_color}
      </p>

      <p>
        <strong>Skin Color:</strong> {props.person.skin_color}
      </p>

      <p>
        <strong>Eye Color:</strong> {props.person.eye_color}
      </p>
    </div>
  );
};

export default PersonLooks;
