import React, { Component } from 'react';

class MovieList extends Component {
    constructor() {
        super();
        this.state = {
            swMovies: [],
        }
    }

    componentDidMount() {
        // feel free to research what this code is doing.
        // At a high level we are calling an API to fetch some starwars data from the open web.
        // We then take that data and resolve it our state.
        this.props.films.forEach(film => {
            fetch(film)
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    console.log("Film Data ", data);
                    this.setState({ swMovies: [...this.state.swMovies, data.title] });
                })
                .catch(err => {
                    throw new Error(err);
                });
        });
    }

    render() {
        return (
            <div className="movie-list">
                <p className="movielist">Movies Starred In:</p>
                <ul>
                    {
                        this.state.swMovies.map(title => <li>{title}</li>)
                    }
                </ul>
            </div>
        );
    }
}

export default MovieList;