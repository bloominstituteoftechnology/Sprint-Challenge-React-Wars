import React, {Component} from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import CardStyles from './cardStyles.js';

class CardComp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CardStyles>
            <Card >
                <CardTitle>{this.props.data.name}</CardTitle>
                <CardText><strong>Gender:</strong>{this.props.data.gender}</CardText>
                <CardText><strong>Height:</strong>{this.props.data.height}</CardText>
                <CardText><strong>Weight:</strong>{this.props.data.mass}</CardText>
                <CardText><strong>Hair Color:</strong>{this.props.data.hair_color}</CardText>
                <CardText><strong>Skin Color:</strong>{this.props.data.skin_color}</CardText>
            </Card>
            </CardStyles>
        );
    };
}

export default CardComp;