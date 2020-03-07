import React, { useState, useEffect } from "react";
import axios from "axios";

import SwCard from "./SwCard";

function SwList() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios.get("https://swapi.co/api/people/").then(response => {
      console.log(response);
      //   setCharacters(response.data);
    });
  }, []);

  return (
    <div>
      {characters.map(character => {
        return (
          <SwCard
            name={character.name}
            birthYear={character.birth_year}
            eyeColor={character.eye_color}
          />
        );
      })}
      ;
    </div>
  );
}

export default SwList;
