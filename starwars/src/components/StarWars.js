import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StarWarsCard from "./StarWarsCard";
const MainCard = styled.div`
  display: flex;
  width: 100%;
`;

function StarWars() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(res => {
        console.log("it's working:", res.data);
        setData(res.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <MainCard>
        <h1 className="Header">React Wars</h1>

        {data.map(data => {
          return (
            <StarWarsCard
              key={data.created}
              name={data.name}
              birth={data.birth_year}
              gender={data.gender}
              eye={data.eye_color}
              hair={data.hair_color}
              height={data.height}
              mass={data.mass}
              skin={data.skin_color}
            />
          );
        })}
      </MainCard>
    </div>
  );
}

export default StarWars;
