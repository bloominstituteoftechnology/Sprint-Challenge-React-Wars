import React from 'react';
import MoreInfo from './MoreInfo';

class Char extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      info: {Name: this.props.character.name},
      films: []
    }
  }

  componentDidMount() {
    if(this.props.character.films) {
      this.props.character.films.forEach(film => this.getFilms(film));
    }
  }
  
  getFilms = (URL) => {
      // feel free to research what this code is doing.
      // At a high level we are calling an API to fetch some starwars data from the open web.
      // We then take that data and resolve it our state.
      fetch(URL)
        .then(res => {
          return res.json();
        })
        .then(data => {
          const arr = this.state.films.slice();
          arr.push(data.title);
          this.setState({ films: arr });
        })
        .catch(err => {
          throw new Error(err);
        });
  }

  getMoreInfo = () => {
    let info = {};
      
      if(Object.keys(this.state.info).length === 1) {
        info = {
        name: this.props.character.name,
        gender: this.props.character.gender,
        "Eye Color": this.props.character.eye_color,
        "Hair Color": this.props.character.hair_color,
        "Skin color": this.props.character.skin_color,
        height: this.props.character.height,
        "Birth Year": this.props.character.birth_year,
        films: this.state.films
      }
    } else {
      info = {Name: this.props.character.name};
    }
    this.setState({info: info});
  }

  render() {
    return (
      <div className="character" onClick={this.getMoreInfo}>
        <MoreInfo info={this.state.info} />
      </div>
    );
  }
};

export default Char;