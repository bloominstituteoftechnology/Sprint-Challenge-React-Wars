import React, { Component } from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class CharContainer extends Component {
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
      <div>
        <h3>Characters</h3>
      <div className="cardContainer">
        <div className="charactersContainer">
        {this.props.characters.map(character => {
          return (
            <div className="characters" key={character.created}>
            <Card className="characterCard">
              <CardBody>
                <CardTitle><span className="boldedText">NAME:</span> {character.name}</CardTitle>
                <Button color="secondary" onClick={this.toggle}>Attributes</Button>
                  <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalBody>
                      <CardText><span className="boldedText">BIRTH YEAR:</span> {character.birth_year}</CardText>
                      <CardText><span className="boldedText">GENDER:</span> {character.gender}</CardText>
                      <CardText><span className="boldedText">EYE COLOR:</span> {character.eye_color}</CardText>
                      <CardText><span className="boldedText">HAIR COLOR:</span> {character.hair_color}</CardText>
                      <CardText><span className="boldedText">SKIN COLOR:</span> {character.skin_color}</CardText>
                      <CardText><span className="boldedText">HEIGHT:</span> {character.height}</CardText>
                      <CardText><span className="boldedText">MASS:</span> {character.mass}</CardText>
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
      </div>
    );
  }
};

export default CharContainer;