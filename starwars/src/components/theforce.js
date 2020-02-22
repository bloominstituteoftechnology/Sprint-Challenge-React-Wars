import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Cards from "./cards"
import {Col} from 'reactstrap';

const Page = styled.div`
  opacity: .9;
  margin: 1%;
  Height: 90vh;
`;

export default function TheForce() {
  const [pod, setPod] = useState([]);
  
  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log(response);
        setPod(response.data.results);
      })
      .catch(error => {
        console.log("Sorry no star wars", error);
      });
  }, []);

  return (
   <Page>
     <Col  xs="6" md="4" xl="3">
      {pod.map(people => {
            return (<Cards key={people.id} name={people.name} gender={people.gender} height={people.height} mass={people.mass} />);
          })}
     </Col>  
   </Page>   
  );
}