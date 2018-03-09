import React, {Component} from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import PropTypes from 'prop-types';


class CharCard extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            height: '',
            mass: ''
        }
    }

    render() {
        return (
            <div className="card-box">
                <Card body className="text-center">
                <CardTitle>{this.props.name}</CardTitle>
                <CardText>
                    Height: {this.props.height}<br/>
                    Mass: {this.props.mass}<br/>
                    Hair Color: {this.props.hair}<br/>
                    Eye Color: {this.props.eyes}<br/>
                    Birth Year: {this.props.birth_year}<br/>
                    Gender: {this.props.gender}
                </CardText>
                </Card>
            </div>
        )
    };

    
}

CharCard.propTypes = {
    name: PropTypes.string,
    height: PropTypes.string,
    mass: PropTypes.string,
    hair: PropTypes.string,
    eyes: PropTypes.string,
    birth_year: PropTypes.string,
    gender: PropTypes.string,
};





export default CharCard;