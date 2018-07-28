 import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "./card.css";

const ToonCard = props => {
  const _fontSize = ['10px', '15px', '20px' , '25px' ];
  let currentFontSize = '';
  //pos is coming in as integer, we have to use template literal to convert to string
  switch(`${props.pos}`) {
    case '0' :
      currentFontSize = _fontSize[0];
      break;
    case '1' :
      currentFontSize = _fontSize[1];
      break;
    case '2' :
      currentFontSize = _fontSize[2];
      break;
    default:
      currentFontSize = _fontSize[3];
      break;
  }
  return (
    <div className="card-wrapper" style={{fontSize:currentFontSize}}>
      <div className="card-container">
        <Card>
          <CardBody>
            <CardTitle>{props.name}</CardTitle>
            <CardText>
              Gender: {props.gender}
              Height: {props.height}
              Weight: {props.weight}
              Birth Year: {props.birth_year}
            </CardText>            
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ToonCard;
