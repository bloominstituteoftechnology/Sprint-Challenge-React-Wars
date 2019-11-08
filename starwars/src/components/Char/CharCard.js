import React from 'react';
import styled from 'styled-components';
import { Col, Card, CardTitle, CardBody, ListGroup, ListGroupItem } from 'reactstrap';

export default CharCard;

//styles
const SCol = styled(Col)`
  margin-bottom: 10px;
`;

function CharCard({character}) {
  const {name, height, mass, hair_color, skin_color, eye_color, birth_year, gender} = character;

  return (
    <SCol className="col-6">
      <Card>
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <ListGroup>

            <ListGroupItem>{height}</ListGroupItem>
            <ListGroupItem>{mass}</ListGroupItem>
            <ListGroupItem>{hair_color}</ListGroupItem>
            <ListGroupItem>{skin_color}</ListGroupItem>
            <ListGroupItem>{eye_color}</ListGroupItem>
            <ListGroupItem>{birth_year}</ListGroupItem>
            <ListGroupItem>{gender}</ListGroupItem>
          </ListGroup>

        </CardBody>
      </Card>
    </SCol>
  )
}