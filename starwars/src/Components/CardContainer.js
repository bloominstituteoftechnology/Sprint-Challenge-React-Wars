import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

const CardContainer = (props) => {
        return (
            <div> 
                <Card>
                <CardTitle>{this.props.data.name}</CardTitle>
                <CardText>
                    <p><strong>Gender:</strong>{this.props.data.gender}</p>
                    <p><strong>Height:</strong>{this.props.data.Height}</p>
                    <p><strong>Weight:</strong>{this.props.data.Weight}</p>
                    <p><strong>Skin Color:</strong>{this.props.data.hair_color}</p>
                    <strong>Hair Color:</strong>{this.props.data.skin_color}
                </CardText>
                </Card>
            </div>
        );
    };

export default CardContainer;