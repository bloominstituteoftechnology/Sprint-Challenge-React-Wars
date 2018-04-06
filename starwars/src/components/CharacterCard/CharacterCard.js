import React from 'react';
import Species from '../Species/Species';
import { Button } from 'reactstrap';
import './CharacterCard.css'


class CharacterCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            details: {}
        }
    }

    componentDidMount() {
        this.setState ({
            details: this.props.character
        })
    }

    render() {
        return (
            <div className="CardContainer">
                <h2 className="name">{this.state.details.name}</h2>
                <p className="birthday">Birth Year: {this.state.details.birth_year}</p>
                <p className="height">Height: {this.state.details.height}</p>
                <p className="mass">Mass: {this.state.details.mass}</p>
                <p className="gender">Gender: {this.state.details.gender}</p>
                <p className="skin">Skin Color: {this.state.details.skin_color}</p>
                <p className="hair">Hair Color: {this.state.details.hair_color}</p>
                <p className="eyes">Eye Color: {this.state.details.eye_color}</p>
                    <div className="Links">
                        <Button className="Links--link" href={this.state.details.homeworld}>Home World</Button>
                        <Button className="Links--link" href={this.state.details.films}>Films</Button>
                        <Button className="Links--link" href={this.state.details.species}>Species</Button>
                        <Button className="Links--link" href={this.state.details.starships}>Star Ships</Button>
                        <Button className="Links--link" href={this.state.details.vehicles}>Vehicles</Button>
                    </div>
            </div>
        );
    }
}

export default CharacterCard;