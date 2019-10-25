import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

//components
import CharacterInfo from "./CharacterInfo";

const StyledCard = styled.div`
  height: 300px;
  width: 250px;
  padding: 0;
  color: #fff;
  boxshadow: "0px 0px 5px #666";
`;

const CardUi = () => {
  const [starWarsChar, setStarWarsChar] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people")
      .then(response => {
        console.log(response.data.results);
        setStarWarsChar(response.data.results);
      })
      .catch(error => console.log(`We have an error ${error}`));
  }, []);

  return (
    <StyledCard>
      {starWarsChar.map(character => (
        <CharacterInfo key={character.name} character={character} />
      ))}
      }
    </StyledCard>
  );
};

export default CardUi;
