import React from "react";
import FilmsCont from "./FilmsCont";
import {
    Card, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
  import "./StarWars.css";


  const CardData = (props) => {

    console.log(props)

    return (
        <Card className="card">
          <CardBody>
    <CardTitle>{props.data.name}</CardTitle>
    <CardSubtitle>{props.data.height}</CardSubtitle>
    <FilmsCont films={props.data.films} />
           
          </CardBody>
        </Card>


    )
  };

export default CardData;