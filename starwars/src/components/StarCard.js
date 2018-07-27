import React, { Component } from 'react';
import './StarWars.css';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const WarCard = (props) => {
  return(
      <div className="cardContainer">
          <div className="row">
              {props.attribute.map(e =>
                  <div>
                      <Card>
                          <CardBody>
                              <CardTitle>{e.name}</CardTitle>
                          </CardBody>
                      </Card>
                  </div>
              )
              }
          </div>
      </div>
  );
}

export default WarCard;
