import React from 'react';

export default class Character extends React.Component {

  constructor() {

    super();

    this.state = {
      homeworld: 'fetching homeworld...',
      films: [],
      species: 'fetching species...',
      language: 'fetching language...'
    }

  }

  componentDidMount() {

    fetch(this.props.data.homeworld).then(res => res.json()).then(data => {this.setState({homeworld: data.name})});

    fetch(this.props.data.species).then(res => res.json()).then(data => {this.setState({species: data.name, language: data.language})});

    for (let i = 0; i < this.props.data.films.length; i++) {

      fetch(this.props.data.films[i]).then(res => res.json()).then(data => {this.setState({films: [...this.state.films, data.title]})});

    }

  }

  render() {

    return (

      <div className='character'>

        <h2>{this.props.data.name}</h2>
        <h3>Height: {this.props.data.height}cm</h3>
        <h3>Mass: {this.props.data.mass}kg</h3>
        <h3>Hair Color: {this.props.data.hair_color}</h3>
        <h3>Skin Color: {this.props.data.skin_color}</h3>
        <h3>Eye Color: {this.props.data.eye_color}</h3>
        <h3>Birth Year: {this.props.data.birth_year}</h3>
        <h3>Gender: {this.props.data.gender}</h3>
        <h3>Home world: {this.state.homeworld}</h3>
        <h3>Species: {this.state.species}</h3>
        <h3>Language: {this.state.language}</h3>
        <details><summary>Films:</summary><ul>{this.state.films.map(film => <li>{film}</li>)}</ul></details>

      </div>

    );

  }

}
