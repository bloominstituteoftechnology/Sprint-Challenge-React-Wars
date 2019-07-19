import React from "react";
import { Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const CharacterCard = ({ characters }) => (
  <Card>
    {characters.map(character => {
      return (
        <Card key={character.url}>
          <Card.Content header={character.name} />
          <Card.Content> Height: {character.height}</Card.Content>
          <Card.Content> Hair-Color: {character.hair_color}</Card.Content>
          <Card.Content> DOB: {character.birth_year}</Card.Content>
        </Card>
      );
    })}
  </Card>
);

export default CharacterCard;
