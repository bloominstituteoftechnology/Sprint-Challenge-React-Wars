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

const ButtonBox = styled.div`

  display: flex;
  width: 100%;
  justify-content: space-between;

`

const BackButton = () => {
  return (
    <button>
      {'<'}
    </button>
  )
}

const ForwardButton = () => {
  return (
    <button>
      {'>'}
    </button>
  )
}

function StarPeople(props) {

  const [person, setPerson] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {

    axios.get(`https://swapi.co/api/people/?page=${count}`)
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
      <ButtonBox>
        <BackButton onClick={() => setCount(count > 1 ? count - 1 : count)}/>
        <ForwardButton onClick={() => setCount(count + 1)}/>
      </ButtonBox>
      <StyledContainer>
        {person.map(person => {
          return <StarCard name={person.name} height={person.height} mass={person.mass} birth_year={person.birth_year}/>})}
      </StyledContainer>
    </div>
  )

}

export default StarPeople;