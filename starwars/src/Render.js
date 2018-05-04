import React from 'react';

import {
  Card,
  CardText,
  CardBody,
  CardSubtitle,
  Row
} from 'reactstrap';
import './Render.css';

const Render = props => {
        return (
        <Card>
         <CardBody>
            <Row>
              <CardSubtitle>
                {props.char.name}
              </CardSubtitle>
            </Row>
          </CardBody>
            {props.char.hair_color}
          <CardBody>
            <CardText>
              <div>{props.char.eye_color}</div>
            </CardText>
            <CardText>
            </CardText>
          <CardText>
              <div>{props.char.birth_year}</div>
            </CardText>
          </CardBody>
        </Card>
      );
    };
    
    export default Render;