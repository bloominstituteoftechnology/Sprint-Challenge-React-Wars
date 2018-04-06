import React from "react";
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg
} from "reactstrap";
import DisplayCharacter from "../DisplayCharacter/DisplayCharacter";
import "./Charcards.css";

const Charcards = props => {
  const filterData = index => {
    let passValues = [
      "birth_year",
      "gender",
      "height",
      "mass",
      "eye_color",
      "skin_color",
      "hair_color"
    ];
    return passValues.includes(index);
  };

  return (
    <li className="display">
      <Card>
        <CardBody>
          <CardTitle>{props.character.name}</CardTitle>
          <CardText>
            <span className="display_data">
              {Object.keys(props.character).map((key, index) => {
                if (filterData(key)) {
                  return (
                    <DisplayCharacter data={props.character[key]} title={key} />
                  );
                }
              })}
            </span>
          </CardText>
        </CardBody>
      </Card>
    </li>
  );
};

export default Charcards;