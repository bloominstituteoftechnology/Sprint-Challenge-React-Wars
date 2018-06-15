import React from 'react';
import './StarWars.css'
import {Card, CardBody, CardTitle, CardHeader} from 'reactstrap';

const Char = props => {
  return (
    <div>
      <Card className="my-5 character-card">
      <CardHeader><h1>{props.item.name}</h1></CardHeader>
      <CardBody>
      <CardTitle>Stats</CardTitle>
      <ul>
        <li>Height: {props.item["height"]}cm</li>
        <li>Mass: {props.item["mass"]}kg</li>
        <li>Hair Color: {props.item.hair_color}</li>
        <li>Skin Color: {props.item.skin_color}</li>
        <li>Eye Color: {props.item.eye_color}</li>
        <li>Birth Year: {props.item.birth_year}</li>
        <li>Gender: {props.item.gender}</li>
      </ul>
      </CardBody>
      </Card>
    </div>
  );
}

export default Char;
