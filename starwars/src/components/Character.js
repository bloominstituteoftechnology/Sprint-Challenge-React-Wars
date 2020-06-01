// Write your Character component here
import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

function Character(props){
  return (
    <Row>
      <Col sm="6">
        <Card body>
          {props.characterArray.map((Character) => {
             return(
           <Card key = {Character.created}>
           <CardTitle>{Character.name}</CardTitle>
           <CardText>{Character.manufacturer}</CardText>
           <Button>------</Button>
          </Card>
            )
         })}
          <Button >Clear</Button>
        </Card>
      </Col>
    </Row>
  );
};

export default Character;