import React, { Component } from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import starwarsLogo from './starwars.jpg';


class PlanetContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <div className="cardContainer">
        <h3>Planets</h3>
          <div className="planetsContainer">
            {this.props.planets.map(planet => {
              return (
                <div className="planets" key={planet.created}>
                  <Card className="planetCard">
                  
                  <CardImg top width="100%" src={starwarsLogo} alt="Card image cap" />
                    <CardBody>
                      <CardTitle><span className="boldedText">NAME:</span> {planet.name}</CardTitle>
                      <Button color="secondary" onClick={this.toggle}>Attributes</Button>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <CardImg top width="100%" src={starwarsLogo} alt="Card image cap" />
                          <ModalBody> 
                            <CardText><span className="boldedText">ROTATION PERIOD:</span> {planet.rotation_period}</CardText>
                            <CardText><span className="boldedText">ORBITAL PERIOD:</span> {planet.orbital_period}</CardText>
                            <CardText><span className="boldedText">DIAMETER:</span> {planet.diameter}</CardText>
                            <CardText><span className="boldedText">CLIMATE:</span> {planet.climate}</CardText>
                            <CardText><span className="boldedText">GRAVITY:</span> {planet.gravity}</CardText>
                            <CardText><span className="boldedText">TERRAIN:</span> {planet.terrain}</CardText>
                            <CardText><span className="boldedText">SURFACE WATER:</span> {planet.surface_water}</CardText>
                            <CardText><span className="boldedText">POPULATION:</span> {planet.population}</CardText>
                      <ModalFooter>
                      <Button color="secondary" onClick={this.toggle}>OK</Button>
                    </ModalFooter>
                    </ModalBody>
                  </Modal>
              
                    </CardBody>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
    
    );
  }
};

export default PlanetContainer;