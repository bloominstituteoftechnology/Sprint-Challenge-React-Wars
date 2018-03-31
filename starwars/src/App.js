import React, { Component } from 'react';
import Portrait from './components/Portrait/Portrait';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      pictures: {}
    };
  }

  componentDidMount() {
    let images = {
      'Luke Skywalker': 'http://static.tvtropes.org/pmwiki/pub/images/skywalker_luke.jpg',
      'C-3PO': 'https://www.sideshowtoy.com/wp-content/uploads/2014/11/star-wars-c-3po-sixth-scale-thumb-2171.jpg',
      'R2-D2': 'https://www.swarovski.com/is-bin/intershop.static/WFS/SCO-Media-Site/-/-/publicimages/CG/B2C/PROD/360/Swarovski-Star-Wars-R2-D2-5301533-W360.jpg',
      'Darth Vader': 'https://lumiere-a.akamaihd.net/v1/images/darth-vader-i-am-your-father_1a6fda29.jpeg?region=63%2C0%2C455%2C342&width=320',
      'Leia Organa': 'http://static.tvtropes.org/pmwiki/pub/images/princess_leia_organa_sw_2597.jpg',
      'Owen Lars' : 'data:image/jpeg;base64,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',
      'Beru Whitesun lars': 'http://pm1.narvii.com/6293/db859b249381c30a6be8f8242046105e552cd54d_00.jpg',
      'R5-D4': 'https://dyn0.media.forbiddenplanet.com/products/140897.jpg.square-true_maxheight-285_size-285.jpg',
      'Biggs Darklighter' : 'https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png/revision/latest?cb=20130305010406',
      'Obi-Wan Kenobi': 'https://78.media.tumblr.com/b6a17165c4c9903b4c4ee167cd590687/tumblr_inline_ovco60PbUt1uwi8pu_540.png',
    }

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
    
    this.setState({ pictures: images });
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="Container">
          <ul className="Portraits">
            {this.state.starwarsChars.map((char, index) => {
              return (
                  <Portrait character={char}
                            pictures={this.state.pictures}
                            key={index} 
                  />
                );
              })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
