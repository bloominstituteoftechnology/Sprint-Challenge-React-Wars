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
import DisplayItem from "../DisplayItem/DisplayItem";
import "./Display.css";

const Display = props => {
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
  // const {
  //   birth_year,
  //   eye_color,
  //   gender,
  //   hair_color,
  //   height,
  //   mass,
  //   name,
  //   skin_color
  // } = props.character;
  return (
    <li className="display">
      <Card>
        <CardImg
          className="profile__image"
          src={props.picture["default"]}
          alt="Person Image"
        />
        <CardBody>
          <CardTitle>{props.character.name}</CardTitle>
          <CardText>
            <ul className="display_data">
              {Object.keys(props.character).map((key, index) => {
                if (filterData(key)) {
                  return (
                    <DisplayItem data={props.character[key]} title={key} />
                  );
                }
              })}
            </ul>
          </CardText>
        </CardBody>
      </Card>
    </li>
  );
};

export default Display;
