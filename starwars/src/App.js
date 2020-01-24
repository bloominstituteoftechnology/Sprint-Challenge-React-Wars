import React, {useEffect, useState} from "react";
import './App.css';
import StarWars from "./components/StarWars";
import axios from "axios"
import { Container, Row } from "reactstrap";
import styled from "styled-components";

let NewTitle = styled.div`
text-align: center;
margin-top: 30px;
`;

let NewContainer = styled(Container)`
height: 800px;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
    let [swData, setSWdata] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

      useEffect( () => {
        axios
            .get("https://swapi.co/api/people/")
            .then(response => {
                console.log(response);
                setSWdata(response.data.results)
            })
            .catch(error =>{
                console.log("error found", error);
            })
    }, []);

  return (
    <div className="App">
      <NewTitle>
        <h1>Star Wars Characters</h1>
      </NewTitle>
      <NewContainer>
        <Row>
      {swData.map((people, index) =>(
          <StarWars
          key = {index}
          name = {people.name}
          height = {people.height}
          birthDate = {people.birth_year}
          gender = {people.gender}
          films = {people.films.length}
          />
      ))}
        </Row>
      </NewContainer>
    </div>
  );
}

export default App;
