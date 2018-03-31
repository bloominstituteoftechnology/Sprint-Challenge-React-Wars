import React, { Component } from 'react';

class StarWarsChar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: {
            birth_year: '',
            created: '',
            edited: '',
            eye_color: '',
            films: '',
            gender: '',
            hair_color: '',
            height: '',
            homeworld: '',
            mass: '',
            name: '',
            skin_color: '',
            species: '',
            starships: '',
            url: '',
            vehicles: ''
        }
    };
  }

componentDidMount() {
    this.setState({data: this.props.data});
}

  render() {
    return (
      <div className="StarWarsChar">
        <h2 className="Name">{this.state.data.name}</h2>
      </div>
    );
  }
}

export default StarWarsChar;
