import React, { useEffect, useState } from "react";
import StarWarsCard from "./Card";
import axios from "axios";
import styled from "styled-components";
import { Button } from 'reactstrap';

const CardContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: space-around;
`

const StarWarsGetInfo = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(re => {
        console.log(re.data.results);
        setInfo(re.data.results);
      })
      .catch(err => console.log("error", err));
  }, []);
  //return <h1>hi</h1>
  return (
    <div>
      <CardContainer>
        {info.map(data => (
          <StarWarsCard
            name={data.name}
            eye_color={data.eye_color}
            gender={data.gender}
          />
        ))}
      </CardContainer>
      <Button color="primary">previous</Button>{' '}
      <Button color="secondary">next</Button>{' '}
    </div>
  );
};

export default StarWarsGetInfo;
