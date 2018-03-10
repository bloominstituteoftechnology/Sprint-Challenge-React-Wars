import React, { Component } from 'react';
import './CharCard.css';
import Homeworld from '../Homeworld/Homeworld';
import Species from '../Species/Species';
import { Button } from 'reactstrap';

export default class CharCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deets: {}
        }
    }

    componentDidMount() {
        this.setState({
            deets: this.props.character
        })
    }

    render() {
        return (
            <div className="CardContainer">
                <h2>{this.state.deets.name}</h2>
                <p>Birth Year: {this.state.deets.birth_year}</p>
                <p>Heigh: {this.state.deets.mass} Mass: {this.state.deets.mass}</p>
                <p>Hair Color: {this.state.deets.hair_color}</p>
                <div className="Links">
                    <Button className="Links__link" href={this.state.deets.species}>Species</Button>
                    <Button className="Links__link" href={this.state.deets.homeworld}>Homeworld</Button>
                    <Button className="Links__link" href={this.state.deets.vehicles}>Vehicles</Button>
                    <Button className="Links__link" href={this.state.deets.starships}>Starships</Button>
                </div>
            </div>
        );
    }
}