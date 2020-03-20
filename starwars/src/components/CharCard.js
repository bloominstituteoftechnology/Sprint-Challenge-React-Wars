import React from "react";

import { Card, CardBody, CardTitle, CardText,} from 'reactstrap';

const CharCard = props => {
    return (
    <div> 
     <Card>
        <CardBody>
          <CardTitle>Hello, my name is: {props.nameKey}</CardTitle>
          <CardText>My hair color is: {props.hairKey}</CardText>
          <CardText>
            <small className="text-muted"> My eyecolor is: {props.eyecolorKey} </small>
          </CardText>
        </CardBody>
      </Card>
    </div> 
    )

};

export default CharCard;