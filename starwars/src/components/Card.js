import React from "react";
import "./starwars.css";
class Card extends React.Component {
    render() {
        return (
            <div key={this.props.name} className="Card-body">
                <h2>{this.props.name}</h2>
                <div className="card-content">
                    <h3>Info</h3>
                    <p>Birth Year: {this.props.birthYear}</p>
                    <p>Home World: {this.props.homeWorld}</p>
                    <p>Gender: {this.props.gender}</p>
                    <p>hair Color: {this.props.hairColor}</p>
                    <p>Height {this.props.height}</p>
                    <p>Weigth: {this.props.weigth}</p>
                    <p>Films: {this.props.films}</p>
                </div>
            </div>
        )
    }
}

export default Card;