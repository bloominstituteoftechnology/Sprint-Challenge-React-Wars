import React, { Component } from 'react';


class Card extends React.Component {

    picture = (props) => {
        if (this.props.name === "Luke Skywalker") {
            return 'https://i.imgflip.com/2/b6l2b.jpg'
        }
    }
    render() {
        return (
            <div className="card">
                <h1>{this.props.name}</h1>
                <img src= {this.picture()} alt="id-photo"/>
                <p>Birth Year: {this.props.birth}</p>
                <p>Gender: {this.props.gender}</p>
                <p>Eye-Color: {this.props.eye}</p>
                <p>Hair-Color: {this.props.hair}</p>
                <p>Height: {this.props.height}cm</p>
                <p>Mass: {this.props.mass}kg</p>
            </div>
        )
    }
}

export default Card;