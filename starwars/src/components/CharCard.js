import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
} from "reactstrap";
import axios from 'axios'

const CharCard = props => {
  const [world, setWorld] = useState([]);

  useEffect(() => {
    axios.get(props.homeworld)
      .then(response => {
        console.log(response.data.name)
        setWorld(response.data.name);
      })
      .catch(error => {
        console.log(`The planet data was not returned; ${error}`);
      });
  }, []);
  
  return (
    <Col xs="12" s="4" md="6">
    <Card style={{margin: '2% auto', boxShadow: '0px 4px 10px 3px rgba(10, 10, 10, 0.4)'}}>
      <CardBody>
        <CardTitle className="display-4">{props.name}</CardTitle>
        {/* <CardSubtitle className="lead">Appears in: {filmsIn}</CardSubtitle> */}
        <CardSubtitle className="lead">Homeworld: {world}</CardSubtitle>
      </CardBody>
    </Card>
    </Col>
  );
};
export default CharCard;