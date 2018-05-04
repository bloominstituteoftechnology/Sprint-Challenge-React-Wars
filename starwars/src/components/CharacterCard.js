import React from 'react';
import {Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Collapse} from 'reactstrap';
import './CharacterCard.css';

class CharacterCard extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this),
        this.state = {
            collapse: false
        }
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
      }

    render() {
        return (
            <div>

                <Card className="card">
                    <CardBody>
                        <CardTitle className="card-title">{`${this.props.char.name}, born in ${this.props.char.birth_year}`}</CardTitle>
                        <CardSubtitle className="subtitle">{`Created: ${this.props.char.created}`}</CardSubtitle>
                        <CardSubtitle className="subtitle">{`Edited: ${this.props.char.edited}`}</CardSubtitle>
                        <CardText>Click Below for More Details!</CardText>
                        <Button className="profile-btn" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Profile</Button>
                    </CardBody>
                </Card>

                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardBody>
                            <p><span className="profile-marker">Gender:</span>{this.props.char.gender}</p>
                            <p><span className="profile-marker">Height:</span>{this.props.char.height}</p>
                            <p><span className="profile-marker">Mass:</span>{this.props.char.mass}</p>
                            <p><span className="profile-marker">Eye Color:</span>{this.props.char.eye_color}</p>
                            <p><span className="profile-marker">Hair Color:</span>{this.props.char.hair_color}</p>
                            <p><span className="profile-marker">Skin Color:</span>{this.props.char.skin_color}</p>
                        </CardBody>
                    </Card>
                </Collapse>
                 
            </div>
        )
    }
   
}


export default CharacterCard;