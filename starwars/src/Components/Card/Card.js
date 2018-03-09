import React, {Component} from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
//import CardStyle from ./cardStyle.css;

class CardComp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
              <CardTitle>{this.props.data.name}</CardTitle>
                <CardText>
                    <p><strong>Gender:</strong>{this.props.data.gender}</p>
                    <p><strong>Height:</strong>{this.props.data.Height}</p>
                    <p><strong>Weight:</strong>{this.props.data.Weight}</p>
                    <p><strong>Hair Color:</strong>{this.props.data.hair_color}</p>
                    <p><strong>Skin Color:</strong>{this.props.data.skin_color}</p>
                </CardText>
            </Card>
            </div>
        );
    };
}

export default CardComp;