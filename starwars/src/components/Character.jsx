import React from "react";
import { Card, Icon } from "semantic-ui-react";

const Character = ({ character }) => {
  const {
    name,
    gender,
    birth_year,
    height,
    mass,
    hair_color,
    eye_color
  } = character;
  return (
    <Card>
      <Card.Content>
        <Icon name="user outline" />
        <Card.Header>Name: {name}</Card.Header>
        <Card.Meta>
          Height: {height} - Mass: {mass}
        </Card.Meta>
        <Card.Meta>
          Hair Color: {hair_color} - Eye-Color: {eye_color}
        </Card.Meta>
        <Card.Description>Gender: {gender}</Card.Description>
        <Card.Description>Born: {birth_year}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default Character;
