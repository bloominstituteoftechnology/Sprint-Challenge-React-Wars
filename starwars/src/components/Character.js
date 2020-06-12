// Write your Character component here
import React from "react";
import { Card, CardText, Row, Button, CardTitle, Col } from "reactstrap";

const Character = (props) => {
  return (
    <div>
      <Row>
        <Col sm="6">
          <Card body>
            <CardTitle>{props.character.name}</CardTitle>
            <CardText>
            <p>{props.character.species}</p>
            <p>{props.character.status}</p>
            <p>{props.character.gender}</p> 
            </CardText>
            <Button color='primary'>I'm Suppose to do something</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};


export default Character;
