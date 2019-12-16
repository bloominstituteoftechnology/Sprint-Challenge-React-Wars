import React, { useState, useEffect } from "react";
import axios from "axios";
import StarCard from "./StarCard";
import { Container, Row } from "reactstrap";

const StarWList = () => {
  const [sWData, setUpData] = React.useState([]);

  React.useEffect(() => {
    // console.log("React Wars");
    axios
      .get(
        "https://corsanywhere.herokuapp.com/https://lambda-swapi.herokuapp.com/api/people/"
      )
      .then(response => {
        setUpData(response.data.results);
        console.log(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Row>
        {sWData.map(Star => {
          return (
            <StarCard
              // index={index + 1}
              name={Star.name}
              gender={Star.gender}
              height={Star.height}
              skin={Star.skin_color}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default StarWList;
