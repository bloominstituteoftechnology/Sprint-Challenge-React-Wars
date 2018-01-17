import React, { Component } from 'react';
import Player from './Player/Player';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      playerPictures: {},
      vehiclePictures: {},
      starshipPictures: {},
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

    const playerPictures = {
      'Luke Skywalker': 'https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg/revision/latest?cb=20170927034529',
      'C-3PO': 'https://vignette.wikia.nocookie.net/starwars/images/7/7e/ThreepioTFA-Fathead.png/revision/latest?cb=20161109035240',
      'R2-D2': 'https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png/revision/latest?cb=20161108040914',
      'Darth Vader': 'https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png/revision/latest?cb=20130621175844',
      'Leia Organa': 'https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png/revision/latest?cb=20171224004147',
      'Owen Lars': 'https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png/revision/latest?cb=20171108050140',
      'Beru Whitesun lars': 'https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png/revision/latest?cb=20170713063118',
      'R5-D4': 'https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png/revision/latest?cb=20160809033145',
      'Biggs Darklighter': 'https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png/revision/latest?cb=20130305010406',
      'Obi-Wan Kenobi': 'https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg/revision/latest?cb=20111115052816',
    }

    this.setState({ playerPictures })

    const vehiclePictures = {
      'Snowspeeder': 'https://vignette.wikia.nocookie.net/starwars/images/4/44/T-47_Speeder_DICE.png/revision/latest?cb=20151106063152',
      'Imperial Speeder Bike': 'https://vignette.wikia.nocookie.net/starwars/images/6/64/74zSpeederbike-NEGVV.png/revision/latest?cb=20170410035749',
      'Tribubble bongo': 'https://vignette.wikia.nocookie.net/starwars/images/d/d8/Bongo.jpg/revision/latest?cb=20080430201913',
    }

    this.setState({ vehiclePictures })

    const starshipPictures = {
      'X-wing': 'https://vignette.wikia.nocookie.net/starwars/images/b/b2/X-wing_2_Fathead.png/revision/latest?cb=20161004003758',
      'Imperial shuttle': 'https://vignette.wikia.nocookie.net/starwars/images/a/a9/Imperial_shuttle.png/revision/latest?cb=20150827042115',
      'TIE Advanced x1': 'https://vignette.wikia.nocookie.net/starwars/images/1/1d/Vader_TIEAdvanced_SWB.png/revision/latest?cb=20160915042032',
      'Jedi starfighter': 'https://vignette.wikia.nocookie.net/starwars/images/7/7a/Jsf_duo2.jpg/revision/latest?cb=20060706121723',
      'Trade Federation cruiser': 'https://vignette.wikia.nocookie.net/starwars/images/4/47/InvisibleHandStarboard-FF.png/revision/latest?cb=20160906045609',
      'Naboo star skiff': 'https://vignette.wikia.nocookie.net/starwars/images/d/df/Naboo_star_skiff_1.png/revision/latest?cb=20130212042348',
      'Jedi Interceptor': 'https://vignette.wikia.nocookie.net/starwars/images/a/a6/Eta-2_Interceptor.png/revision/latest?cb=20130613124413',
      'Belbullab-22 starfighter': 'https://vignette.wikia.nocookie.net/starwars/images/3/3e/Soulless_One2_TCW.jpg/revision/latest?cb=20090311020627,'
    }

    this.setState({ starshipPictures })
  }
  render() {
    // console.log(this.state)
    return (
      <div className="App">
        <h1 className="Header">
          <p>React Wars</p>
        </h1>
        <div className="Players">
          {this.state.starwarsChars.map((playerData, i) => {
            return (
              <Player
                key={i}
                id={i}
                player={playerData}
                picture={this.state.playerPictures[playerData.name]}
                vehiclesPictures={this.state.vehiclePictures}
                starshipsPictures={this.state.starshipPictures}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
