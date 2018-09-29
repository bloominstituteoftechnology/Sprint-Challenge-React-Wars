import React, { Component } from 'react';


class Card extends React.Component {

    picture = (props) => {
        if (this.props.name === "Luke Skywalker") {
            return 'https://scrw-af.netlify.com/starwars/src/img/luke.jpg'
        } else if (this.props.name === "C-3PO") {
            return 'https://scrw-af.netlify.com/starwars/src/img/c3po.jpg'
        } else if (this.props.name === "R2-D2") {
            return 'https://scrw-af.netlify.com/starwars/src/img/r2d2.jpg'
        } else if (this.props.name === "Darth Vader") {
            return 'https://scrw-af.netlify.com/starwars/src/img/vader.jpg'
        } else if (this.props.name === "Leia Organa") {
            return 'https://scrw-af.netlify.com/starwars/src/img/leia.jpg'
        } else if (this.props.name === "Owen Lars") {
            return 'https://scrw-af.netlify.com/starwars/src/img/owen.jpg'
        } else if (this.props.name === "Beru Whitesun lars") {
            return 'https://scrw-af.netlify.com/starwars/src/img/beru.jpg'
        } else if (this.props.name === "Biggs Darklighter") {
            return 'https://scrw-af.netlify.com/starwars/src/img/biggs.jpg'
        } else if (this.props.name === "R5-D4") {
            return 'https://scrw-af.netlify.com/starwars/src/img/r5d4.jpg'
        } else if (this.props.name === "Obi-Wan Kenobi") {
            return 'https://scrw-af.netlify.com/starwars/src/img/obi.jpg'
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