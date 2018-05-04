import React from "react";
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import "./CharacterList.css";

class CharacterList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className ="container char-list">
        <div className = "row">
         {this.props.list.map((char, index) => {
           return (
            <div key={index} className="card col-12 col-sm-6 col-md-4 col-lg-3">
             <Card >
              <CardTitle>{char.name}</CardTitle>
                <CardBody>
                   <CardTitle>Attributes</CardTitle>
                   <CardText>
                    <div className="attr height">
                      <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/1220594-200.png"/>
                      <span>Height:</span>
                      <span>{char.height}</span>
                    </div>
                    </CardText>
                   <CardText>
                    <div className="attr mass">
                      <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/20317-200.png" />
                      <span>Mass:</span>
                      <span>{char.mass}</span>
                    </div>
                   </CardText>
                   <CardText>
                    <div className="attr hair">
                      <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/543109-200.png" />
                      <span>Hair Color:</span>
                      <span>{char.hair_color}</span>
                    </div>
                   </CardText>
                   <CardText>
                    <div className="attr skin">
                      <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/1335654-200.png" />
                      <span>Skin Color:</span>
                      <span>{char.skin_color}</span>
                    </div>
                   </CardText>
                   <CardText>
                    <div className="attr eye">
                      <img src="https://static.thenounproject.com/png/204713-200.png" />
                      <span>Eye Color:</span>
                      <span>{char.eye_color}</span>
                    </div>
                   </CardText>
                   <CardText>
                    <div className="attr birth">
                      <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/479966-200.png" />
                      <span>Birth Year:</span>
                      <span>{char.birth_year}</span>
                    </div>
                   </CardText>
                   <CardText>
                    <div className="attr gender">
                      <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/531288-200.png" />
                      <span>Gender:</span>
                      <span>{char.gender}</span>
                    </div>
                   </CardText>
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


