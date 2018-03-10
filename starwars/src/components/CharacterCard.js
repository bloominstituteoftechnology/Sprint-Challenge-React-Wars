import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card,
        CardBody,
        CardHeader,
        CardSubtitle } from 'reactstrap';
import Films from './Films';
import './CharacterCard.css';

class CharacterCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characterCard: {},
            films: []
        };
    }

    componentDidMount() {
        this.setState({
            characterCard: this.props.characterCard,
            films: this.props.characterCard.films
        });
    }

    render() {
        return (
            <Card className='card' style={{display: 'flex', flexDirection: 'column', backgroundColor: '#dccfbf'}}>
                <CardHeader style={{marginBottom: 20, borderBottom: '1px solid #776b5d', backgroundColor: '#c7b49c'}}>{this.state.characterCard.name}</CardHeader>
                <CardBody className='cardBody'>
                    <CardSubtitle className='cardStats'>
                        <p style={{fontWeight: 'bold'}}>gender:</p>
                        <p>{this.state.characterCard.gender}</p>
                    </CardSubtitle>
                    <CardSubtitle className='cardStats'>
                        <p style={{fontWeight: 'bold'}}>hair color:</p>
                        <p>{this.state.characterCard.hair_color}</p>
                    </CardSubtitle>
                    <CardSubtitle className='cardStats'>
                        <p style={{fontWeight: 'bold'}}>birth year:</p>
                        <p>{this.state.characterCard.birth_year}</p>
                    </CardSubtitle>
                    <CardSubtitle className='cardStats'>
                        <p style={{fontWeight: 'bold'}}>eye_color:</p>
                        <p>{this.state.characterCard.eye_color}</p>
                    </CardSubtitle>
                    <CardSubtitle className='cardStats'>
                        <p style={{fontWeight: 'bold'}}>height:</p>
                        <p>{this.state.characterCard.height}</p>
                    </CardSubtitle>
                    <CardSubtitle className='cardStats'>
                        <p style={{fontWeight: 'bold'}}>mass:</p>
                        <p>{this.state.characterCard.mass}</p>
                    </CardSubtitle>
                    <CardSubtitle className='cardStats'>
                        <p style={{fontWeight: 'bold'}}>skin color:</p>
                        <p>{this.state.characterCard.skin_color}</p>
                    </CardSubtitle>
                    <CardBody>
                        <Films characterFilms={this.state.films}/>
                    </CardBody>
                </CardBody>
            </Card>
        );
    }
}

CharacterCard.propTypes = {
    characterCard: PropTypes.object.isRequired
};

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