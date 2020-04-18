import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const WrapperStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CharacterContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/").then((response) => {
      console.log(response);
      setData(response.data.results);
    });
  }, []);
  return (
    <div>
      <WrapperStyle className="card">
        {data.map((props, id) => {
          return <CharacterCard key={props.id} props={props} />;
        })}
      </WrapperStyle>
    </div>
  );
};
export default CharacterContainer;
