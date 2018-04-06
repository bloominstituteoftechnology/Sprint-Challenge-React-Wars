import React from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";
import DisplayItem from "../DisplayItem/DisplayItem";
import PropTypes from "prop-types";
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
    <div className="display">
      <Card>
        <CardImg
          className="profile__image"
          src={props.picture["default"]}
          alt="Person Image"
        />
        <CardBody>
          <CardTitle>
            <span className="profile_name">{props.character.name}</span>
          </CardTitle>
          <CardText>
            <ul className="display_data">
              {Object.keys(props.character).map((key, index) => {
                if (filterData(key)) {
                  return (
                    <DisplayItem
                      data={props.character[key]}
                      title={key}
                      key={`disp${index + 1}`}
                    />
                  );
                }
              })}
            </ul>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

Display.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    gender: PropTypes.string,
    height: PropTypes.string,
    mass: PropTypes.string,
    eye_color: PropTypes.string,
    hair_color: PropTypes.string,
    skin_color: PropTypes.string
  })
};

export default Display;
