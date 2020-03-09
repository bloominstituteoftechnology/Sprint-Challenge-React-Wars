import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./card";

export default function List() {
  const [char, setChar] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        setChar(response.data.results);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  console.log(
    char.map(e => {
      return e;
    })
  );
  let info = char.map(e => {
    return (
      <Card
        name={e.name}
        height={e.height}
        films={e.films}
        eyeColor={e.eye_color}
      />
    );
  });

  return <div>{info}</div>
}