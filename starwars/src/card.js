import React, { useState, useEffect } from "react";
import List from "./list";
import axios from "axios";
import { Jumbotron, Button } from "reactstrap";
export default function Cards(props) {
  console.log(props);

  let hi = function() {
    return alert(`${props.eyeColor}`);
  };
  return (
    <div>
      <Jumbotron>
        <hr></hr>
        <h1 className="display-3 ">{props.name}</h1>

        <h2>{props.height / 12} Feet tall</h2>
        <p className="lead">
          <Button color="primary" onClick={hi}>
            Click to get my eye color
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
}
