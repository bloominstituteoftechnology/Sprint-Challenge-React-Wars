import React from 'react';
import './StarWars.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: []
    }
  }

  componentDidMount() {
    this.getCharacters(this.props.char.homeworld);
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ 
          home: data.name,
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="char-card"
        style={ 
          this.props.char.gender === 'female' ? {backgroundColor: '#7C3215'} : 
          this.props.char.gender === 'male' ? {backgroundColor: '#4D3420'} :
          {backgroundColor: '#A3B7CF'} }>
        <h2>{this.props.char.name}</h2>
        <p>Gender: {this.props.char.gender !== 'n/a' ? this.props.char.gender : '-'}</p>
        <p>Birth Year: {this.props.char.birth_year}</p>
      </div>
    );
  }
}

export default Card;