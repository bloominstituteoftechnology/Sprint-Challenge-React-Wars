import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StarWarsCard from "./StarWarsCard";
const MainCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 10px auto;
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
