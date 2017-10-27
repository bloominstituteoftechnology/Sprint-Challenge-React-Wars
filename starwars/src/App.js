import React, { Component } from 'react';
import './App.css';
// import { Card } from './Card';


class Button extends Component {
  render() {
    return (
      <button className="button button-primary">
        <i className="fa fa-chevron-right"></i> Find out more
      </button>
    )
  }
}


class CardHeader extends Component {
  render() {
    const { image, category } = this.props;
    var style = { 
        backgroundImage: 'url(' + image + ')',
    };
    return (
      <header style={style} className="card-header">
        <h4 className="card-header--title">{category}</h4>
      </header>
    )
  }
}


class CardBody extends Component {
  render() {
    return (
      <div className="card-body">
        <p className="date">{this.props.index.created}</p>
        
        <h2>{this.props.index.name}</h2>
        
        <p className="body-content">{this.props.text}</p>
        
        <Button />
      </div>
    )
  }
}


class Card extends Component {
  render() {
    return (
      <article className="card">
        <CardHeader category={this.props.index.name}/>
        <CardBody title={this.props.details.title} text={this.props.details.text}/>
      </article>
    )
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }
  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch('https://swapi.co/api/people')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  render() {
  const chars = [this.state.starwarsChars.map((characters, i) => {
    return <li key={i + 1}>{characters}</li>;
  })]

    return (
      <div className="App">
        <div className="HeaderDiv">
        <h1 className="Header">React Wars</h1>
        </div>
        
        <div className="app-card-list" id="app-card-list">
        <ul>
        {chars}
      </ul>
        </div>
      </div>
      
    );
  }
}

export default App;

          /* {
            const chars = this.state.starwarsChars
            .keys()
            .map(key => <Card key={key} index={key} details={this.state.starwarsChar[key]}/>)
          } */