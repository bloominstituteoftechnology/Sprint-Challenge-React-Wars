import React from "react";

import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

class Characters extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        {/* {<h1> {`test`}</h1>} */}
        <Card>
          <CardBody>
            <CardTitle>{`Name: ${this.props.char.name}`}</CardTitle>
            <CardSubtitle>{`Height: ${this.props.char.height}`}</CardSubtitle>
            <CardSubtitle>{`Mass: ${this.props.char.mass}`}</CardSubtitle>
            <CardSubtitle>{`Hair Color: ${this.props.char.hair_color}`}</CardSubtitle>
            <CardSubtitle>{`Skin Color: ${this.props.char.skin_color}`}</CardSubtitle>
            <CardSubtitle>{`Birth Year: ${this.props.char.birth_year}`}</CardSubtitle>
            <CardSubtitle>{`Created At: ${this.props.char.created}`}</CardSubtitle>
            <CardSubtitle>{`Edited At: ${this.props.char.edited}`}</CardSubtitle>
            <CardSubtitle>{`Eye Color: ${this.props.char.eye_color}`}</CardSubtitle>
            <CardSubtitle>{`Gender: ${this.props.char.gender}`}</CardSubtitle>
            <CardSubtitle>{`Hair Color: ${this.props.char.hair_color}`}</CardSubtitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Characters;
