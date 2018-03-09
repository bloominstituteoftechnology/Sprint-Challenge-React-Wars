import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card,
        CardBody,
        CardHeader,
        CardText} from 'reactstrap';
import './CharacterCard.css';

class CharacterCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characterCard: {}
        };
    }

    componentDidMount() {
        this.setState({characterCard: this.props.characterCard})
    }

    render() {
        return (
            <Card className='card' style={{display: 'flex', flexDirection: 'column'}}>
                <CardHeader style={{marginBottom: 20}}>{this.state.characterCard.name}</CardHeader>
                <CardBody>
                    <CardText className='cardStats'>
                        <div style={{fontWeight: 'bold'}}>gender:</div>
                        <div>{this.state.characterCard.gender}</div>
                    </CardText>
                    <CardText className='cardStats'>
                        <div style={{fontWeight: 'bold'}}>hair color:</div>
                        <div>{this.state.characterCard.hair_color}</div>
                    </CardText>
                    <CardText className='cardStats'>
                        <div style={{fontWeight: 'bold'}}>birth year:</div>
                        <div>{this.state.characterCard.birth_year}</div>
                    </CardText>
                    <CardText className='cardStats'>
                        <div style={{fontWeight: 'bold'}}>eye_color:</div>
                        <div>{this.state.characterCard.eye_color}</div>
                    </CardText>
                    <CardText className='cardStats'>
                        <div style={{fontWeight: 'bold'}}>height:</div>
                        <div>{this.state.characterCard.height}</div>
                    </CardText>
                    <CardText className='cardStats'>
                        <div style={{fontWeight: 'bold'}}>mass:</div>
                        <div>{this.state.characterCard.mass}</div>
                    </CardText>
                    <CardText className='cardStats'>
                        <div style={{fontWeight: 'bold'}}>skin color:</div>
                        <div>{this.state.characterCard.skin_color}</div>
                    </CardText>
                </CardBody>
            </Card>
        );
    }
}

CharacterCard.propTypes = {
    character: PropTypes.shape({
        gender: PropTypes.string,
        hair_color: PropTypes.string,
        birth_year: PropTypes.string,
        eye_color: PropTypes.string,
        height: PropTypes.string,
        mass: PropTypes.string,
        skin_color: PropTypes.string,
        films: PropTypes.arrayOf(PropTypes.string)
    })
};

export default CharacterCard;