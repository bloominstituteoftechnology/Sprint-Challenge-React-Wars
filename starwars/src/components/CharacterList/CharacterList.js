import React from "react";
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class CharacterList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.list[0]);
    console.log(this.props);
    return (
      <div className ="container">
        <div className = "row">
         {this.props.list.map((char, index) => {
           return (
            <div className="card col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
             <Card>
              <CardTitle>{char.name}</CardTitle>
                <CardBody>
                   <CardTitle>Atributes</CardTitle>
                   <CardText>Height: {char.height}</CardText>
                   <CardText>Mass: {char.mass}</CardText>
                   <CardText>Hair Color: {char.hair_color}</CardText>
                   <CardText>Skin Color: {char.skin_color}</CardText>
                   <CardText>Eye Color: {char.eye_color}</CardText>
                   <CardText>Birth Year: {char.birth_year}</CardText>
                </CardBody>
              </Card>
            </div>
           )
          })}
        </div>
      </div>
    )
  }
}

export default CharacterList;


