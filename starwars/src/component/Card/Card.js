import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            birthyear: '',
            height: '',
            numFilms: 0,
        };
    }
    componentDidMount () {
        this.setState({
            name: this.props.character.name,
            birthyear: this.props.character.birth_year,
            height: this.props.character.height,
            numFilms: this.props.character.films.length,
        });
    }
    render() {
        return (
                <div className = "card">
                    <div className = "card--item">
                        <div className = "card__name"><b>{this.state.name}</b></div>
                        <div>born {this.state.birthyear}</div>
                        <div>{this.state.height}cm tall</div>
                        <div>Has appeared in {this.state.numFilms} Star Wars {this.state.numFilms === 1 ? "film" : "films"} so far</div>
                    </div>
                </div>
        );
    }
}

export default Card;