import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { Container, Row, Col } from "reactstrap";

function CardSW(props) {
  // useEffect(() => {
  //     axios
  //       .get("https://swapi.co/api/people/")
  //       .then(response => {
  //         console.log(response.data.results);

  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }, []);

  return (
    <Container>
      <Card
        name={props.name}
        height={props.height}
        mass={props.mass}
        hairColor={props.hair_color}
        skinColor={props.skin_color}
      >
        <Col xs="6" sm="4" lg="2" key={props.id}>
          <Card className="body">
            <CardImg
              width="20%"
              src="https://source.unsplash.com/random"
              alt="Card image cap"
            />
            <CardBody>Name: {props.name}</CardBody>
            <> Height: {props.height},</>
            <> Mass: {props.mass},</>
            <> Hair Color: {props.hairColor},</>
            <> Skin Color: {props.skinColor}</>
          </Card>
        </Col>
      </Card>
    </Container>
  );
}

export default CardSW;
