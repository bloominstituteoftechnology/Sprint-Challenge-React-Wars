import React, {Component} from 'react';
import './StarWars.css';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            species: [],
            homeWorld: [],
            starShips: [],
            films: []
        }
        this.fetchSpecies(props.species);
        this.fetchHomeWorld(props.homeWorld);
        this.fetchStarShips(props.starShips);
        this.fetchFilms(props.films);
    }

    fetchSpecies(urls) {
        urls.forEach(x => {
            fetch(x)
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    this.setState({
                        species: data
                    })
                })
                .catch(err => {
                    throw new Error(err);
                });
        })
    }

    fetchHomeWorld(url) {
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.setState({
                    homeWorld: data
                })
            })
            .catch(err => {
                throw new Error(err);
            });
    }

    fetchStarShips(urls) {
        urls.forEach(x => {
            fetch(x)
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    this.setState({
                        starShips: [
                            ...this.state.starShips,
                            data
                        ]
                    })
                })
                .catch(err => {
                    throw new Error(err);
                });
        })  
    }

    fetchFilms(urls) {
        urls.forEach(x => {
            fetch(x)
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    this.setState({
                        films: [
                            ...this.state.films,
                            data
                        ]
                    })
                })
                .catch(err => {
                    throw new Error(err);
                });
        })
    }

    render() {
        return (
            <div className="card">
                <div className="cardRow">
                    <span className="bold">name:</span> <span><h3>{this.props.name}</h3></span>
                </div>
                <div className="cardRow">
                    <span className="bold">gender:</span> <span>{this.props.gender}</span>
                </div>
                <div className="cardRow">
                    <span className="bold">birth year:</span> <span>{this.props.birthYear}</span>
                </div>
                <div className="cardRow">
                    <span className="bold">eye color:</span> <span>{this.props.eyeColor}</span>
                </div>
                <div className="cardRow">
                    <span className="bold">hair color:</span> <span>{this.props.hairColor}</span>
                </div>
                <div className="cardRow">
                    <span className="bold">height:</span> <span>{this.props.height}</span>
                </div>
                <div className="cardRow">
                    <span className="bold">weight:</span> <span>{this.props.mass}</span>
                </div>
                <div className="cardRow">
                    <span className="bold">species:</span> <span>{this.state.species.name}</span>
                </div>
                <div className="cardRow">
                    <span className="bold">home world:</span> <span>{this.state.homeWorld.name}</span>
                </div>
                <div className="cardRow">
                    <span className="bold">star ships:</span> 
                    <span>
                        {(this.state.starShips.length > 0) ?
                            (this.state.starShips.map(x => <p>{x.name}</p>)) :
                            'N/A'
                        }
                    </span>
                </div>
                <div className="cardRow">
                    <span className="bold">films:</span> 
                    <span>
                        {(this.state.films.length > 0) ?
                            (this.state.films.map(x => <p>{x.title}</p>)) :
                            'N/A'
                        }
                    </span>
                </div>
            </div>
        );
    };
}

export default Card;