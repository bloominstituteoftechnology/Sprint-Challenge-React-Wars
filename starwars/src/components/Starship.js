import React from 'react';
import './StarWars.css';


class Starship extends React.Component {
    constructor(){
        super();
        this.state = {};
    }

    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <h3>Model: {this.props.modlel} Manufactuer: {this.props.manufactuerer} Cost in credits: {this.props.cost}</h3>
                <h5>Max atmosphering speed: {this.props.speed} Length: {this.props.length} Crew: {this.props.crew}</h5>
                <p>Passengers: {this.props.passengers} Cargo capacity: {this.props.cargo} Consumables: {this.props.consumables}
                Hyperdrive Rating: {this.props.rating} MGLT: {this.props.MGLT}</p>

            </div>
             
        );
    }

}

export default Starship; 