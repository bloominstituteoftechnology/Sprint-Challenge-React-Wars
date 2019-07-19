import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const CharacterCard = ({ characters }) => (
  <Card.Group>
    {characters.map(character => {
      return (
        <Card key={character.url}>
          <Card.Content header={character.name} />
          <Card.Meta>May the Force be with you</Card.Meta>
          <Card.Content> Height: {character.height}</Card.Content>
          <Card.Content> Hair-Color: {character.hair_color}</Card.Content>
          <Card.Content> DOB: {character.birth_year}</Card.Content>

          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="#522D96">
                DaForce
              </Button>
              <Button basic color="#0A0613">
                DarkSide
              </Button>
            </div>
          </Card.Content>
        </Card>
      );
    })}
  </Card.Group>
);

export default CharacterCard;
