import React from "react";

import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

const CharCard = props => {
    return (
    <div> 
     <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>hello2:{props.nameKey}</CardTitle>
          <CardText>hello{props.hairKey}</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
    </div> 
    )

};

export default CharCard;