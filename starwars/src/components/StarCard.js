import React, { Component } from 'react';
import './StarWars.css';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const WarCard = (props) => {
  return(
      <div className="container">
          <div className="col">
              {props.attribute.map(e =>
                  <div>
                      <Card>
                          <CardBody className="card">
                              <CardTitle>{e.name}</CardTitle>
                              <Button > Add </Button>
                          </CardBody>
                      </Card>
                  </div>
              )
              }
          </div>
      </div>
  );
}


// const Animal = props => {
//   const { common_name, species } = props.animalProp;
//   return (
//     <div>
//       <h4>Name: {common_name}</h4>
//       <h4>Species: {species}</h4>
//     </div>
//   );
// };
//
// handleUpdateState = () => {
//   const animals = this.state.animals.slice();
//   // clone our state animals array.
//   animals.push({
//     id: 4,
//     common_name: "Australian brush turkey",
//     species: "Alectura lathami"
//   });
//   // push our new animal item into the animals array.
//   this.setState({ animals: animals });
//   // FROM REACT API the ONLY way to change state.
// };




export default WarCard;
