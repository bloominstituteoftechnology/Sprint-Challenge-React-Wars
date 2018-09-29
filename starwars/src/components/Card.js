import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className="character-card" selected={this.props.selected}>
            <h2>Name: {this.props.name}</h2>
            <p>Birth Year: {this.props.year}</p>
            <p>Gender: {this.props.gender}</p>
            <p>Hair Color: {this.props.hair}</p>
            <p>Eye Color: {this.props.eyes}</p>
            <p>Skin Color: {this.props.skin}</p>
            </div>
        )
    }
}

export default Card;