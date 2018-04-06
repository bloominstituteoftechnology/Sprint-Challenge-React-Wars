import React from 'react';
import Species from '../Species/Species';
import { Button } from 'reactstrap';


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
            <div classname="CardContainer">
                <h2>{this.state.details.name}</h2>
                <p>Birth Year: {this.state.details.birth_year}</p>
                <p>Height: {this.state.details.height}</p>
                <p>Mass: {this.state.details.mass}</p>
                <p>Skin Color: {this.state.details.skin_color}</p>
                <p>Hair Color: {this.state.details.hair_color}</p>
                <p>Eye Color: {this.state.details.eye_color}</p>
                    <div className="Links">
                        <Button className="Links--link1" href={this.state.details.homeworld}>Home World</Button>
                        <Button className="Links--link2" href={this.state.details.species}>Species</Button>
                        <Button className="Links--link3" href={this.state.details.starships}>Star Ships</Button>
                        <Button className="Links--link4" href={this.state.details.vehicles}>Vehicles</Button>
                    </div>
            </div>
        );
    }
}