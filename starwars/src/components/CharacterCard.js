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
                        <CardTitle>{`${this.props.char.name}, born in ${this.props.char.birth_year}`}</CardTitle>
                        <CardSubtitle className="subtitle">{`Created: ${this.props.char.created}`}</CardSubtitle>
                        <CardSubtitle className="subtitle">{`Edited: ${this.props.char.edited}`}</CardSubtitle>
                        <CardText>Click Below for More Details!</CardText>
                        <Button onClick={this.toggle} style={{ marginBottom: '1rem' }}>Profile</Button>
                    </CardBody>
                </Card>
                 <div>
                    <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardBody>
                        <p>
                        {`Eye Color: ${this.props.char.eye_color}`}
                        </p>
                        <p>
                        {`Gender ${this.props.char.gender}`}
                        </p>
                        <p>
                        {`Hair Color: ${this.props.char.hair_color}`}
                        </p>
                        <p>
                        {`Height: ${this.props.char.height}`}
                        </p>
                        <p>
                        {`Mass: ${this.props.char.mass}`}
                        </p>
                        <p>
                        {`Skin Color: ${this.props.char.skin_color}`}
                        </p>
                        </CardBody>
                    </Card>
                    </Collapse>
                 </div>
    
            </div>
        )
    }
   
}


export default CharacterCard;