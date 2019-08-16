import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const Character = props => {
  const person = props.person;

  return (
    <Card>
      {/* <Image src={`https://picsum.photos/200?random=${props.index}`} wrapped ui={false} /> */}
      <Card.Content>
        <Card.Header>{person.name}</Card.Header>
        <Card.Meta>Born in {person.birth_year}</Card.Meta>
        <Card.Description>
          <p>Eye Color: {person.eye_color}</p>
          <p>Gender: {person.gender}</p>
          <p>Height: {person.height}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          {`Appeared in ${person.films.length} film\(s\)`}
        </a>
      </Card.Content>
    </Card>
  );
};

export default Character;
