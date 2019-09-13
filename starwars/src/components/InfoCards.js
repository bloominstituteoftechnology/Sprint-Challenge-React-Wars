import React, { useState, useEffect } from "react";
import { Card, CardTitle, CardText } from 'reactstrap';
import styled from 'styled-components';
import axios from "axios";


const StyledDiv = styled.div`
    display:flex;
    width: 500px;
    align-items: space-around;
    justify-content:center;
`

const StyledCard = styled(Card)`
    height: 250px;
    width: 40%;
    border: 1px solid black;
    margin-bottom: 20px;
`

export default function StarWarsList() {

const [people, setPeople]= useState([{}]);

  useEffect(()=> {
      axios
      .get("https://swapi.co/api/people/")
      .then((response) => {
          console.log(response);
          const characterArray = response.data.results;
          setPeople(characterArray);
      })
      .catch(error => {
          console.log("No data returned", error)
      
      });
  },[]);

  return (
    <div className="App">
      {people.map(char => {
          return <StyledDiv>
              <StyledCard>
            <CardTitle></CardTitle>{char.name}
            <CardText>
                Weight: {char.mass}kg
            </CardText>
            <CardText>
                Height: {char.height}m
            </CardText>
            <p>Birth year: {char.birth_year}</p>
            <p>Hair: {char.hair_color}</p>
            <p>Skin Color: {char.skin_color}</p>
            <p>Gender: {char.gender}</p>
          </StyledCard>
    </StyledDiv> 
    })}
    </div>
  )
}