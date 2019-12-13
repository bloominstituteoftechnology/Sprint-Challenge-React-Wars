import React, { useState, useEffect } from "react";
import StarCard from "../StarCard/StarCard"
import styled from "styled-components";
import axios from "axios";

const StyledContainer = styled.div`

  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;

`

function StarPeople() {

  const [person, setPerson] = useState([])

  useEffect(() => {

    axios.get("https://swapi.co/api/people/")
    .then(response => {
      console.log(response);
      setPerson(response.data.results);
    })
    .catch(error => {
      console.log(error);
    })

  }, []);

  return (
    <div>
      <StyledContainer>
        {person.map(person => {
          return <StarCard name={person.name} height={person.height} mass={person.mass} birth_year={person.birth_year}/>})}
      </StyledContainer>
    </div>
  )

}

export default StarPeople;