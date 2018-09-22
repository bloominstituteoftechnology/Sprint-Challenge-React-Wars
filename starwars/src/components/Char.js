import React from "react";
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

const Char = props => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Star Wars Character: {props.char.name}</CardTitle>
            <CardText> 
                <div> Birth Year: {props.char.birth_year} </div>
                <div> Height: {props.char.height} </div>
                 <div> Weight: {props.char.mass}lbs </div>
                 <div> Eye Color: {props.char.eye_color} </div>
                 <div> Skin Color: {props.char.skin_color} </div>
                 <div> Gender: {props.char.gender} </div>
            </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Char;
