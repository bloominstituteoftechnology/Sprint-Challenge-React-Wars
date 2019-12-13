import React from 'react';
import styled from 'styled-components';
import { Col, Card, CardTitle, CardBody, ListGroup, ListGroupItem } from 'reactstrap';

export default CharCard;

//styles
const SCol = styled(Col)`
  margin-bottom: 10px;
`;

function CharCard({character}) {

  return (
    <SCol className="col-6">
      <Card>
        <CardBody>
          <CardTitle>{character.name}</CardTitle>
          <ListGroup>

            <ListGroupItem>{character.height}</ListGroupItem>
            <ListGroupItem>{character.mass}</ListGroupItem>
            <ListGroupItem>{character.hair_color}</ListGroupItem>
            <ListGroupItem>{character.skin_color}</ListGroupItem>
            <ListGroupItem>{character.eye_color}</ListGroupItem>
            <ListGroupItem>{character.birth_year}</ListGroupItem>
            <ListGroupItem>{character.gender}</ListGroupItem>
          </ListGroup>

        </CardBody>
      </Card>
    </SCol>
  )
}