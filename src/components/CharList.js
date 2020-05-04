import React, { useState, useEffect } from "react";
import axios from "axios";
import CharCard from "./CharCard.js";

export default function CharList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://swapi.py4e.com/api/people")
      .then((res) => setData(res.data.results));
  }, []);
  console.log(data);
  const characterList = data.map((character, index) => {
    return <CharCard name={character.name} key={index}></CharCard>;
  });
  return (
    <div>
      <h3>Star Wars Characters</h3>
      <ul>{characterList}</ul>
    </div>
  );
}
