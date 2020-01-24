import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";
import styled from "styled-components";

const CharCardCont = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        setCharacter(response.data.results);
        // console.log(response.data);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  return (
    <div>
      {character.map((person, index) => (
        <CharacterCard
          key={index}
          name={person.name}
        />
      ))}
      ))
    </div>
  );
};

export default CharCardCont;