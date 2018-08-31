import React from "react";
import Card from "./Card";
import "./StarWars.css";

const Container = props => {
  return (
    <div className="container">
      {props.traits.map(i => {
        return <Card attribute={i} />;
      })}
    </div>
  );
};

export default Container;
