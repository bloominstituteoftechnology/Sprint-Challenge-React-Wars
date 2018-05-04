import React from 'react';

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardSubtitle,
  Row
} from 'reactstrap';

const Render = props => {
        return (
        <Card>
         <CardBody>
            <Row>
              <CardSubtitle className="cardSubtitle">
                <div>{props.render.name}</div>
              </CardSubtitle>
            </Row>
          </CardBody>
            {props.render.hair_color}
          <CardBody>
            <CardText>
              <div>{props.render.eye_color} likes</div>
            </CardText>
            <CardText>
            </CardText>
          <CardText>
              <div>{props.render.birth_year}</div>
            </CardText>
          </CardBody>
        </Card>
      );
    };
    
    export default Render;