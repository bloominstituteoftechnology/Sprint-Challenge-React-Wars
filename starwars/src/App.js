import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList';


const characterImages = [
  {
    name: 'Luke Skywalker',
    image: 'http://assets1.ignimgs.com/2018/02/21/lukeskywalker-1519252298974_1280w.jpg'
  },
  {
    name: 'C-3PO',
    image: 'https://lumiere-a.akamaihd.net/v1/images/C-3PO-See-Threepio_68fe125c.jpeg?region=0%2C1%2C1408%2C792&width=960'
  },
  {
    name: 'R2-D2',
    image: 'https://lumiere-a.akamaihd.net/v1/images/r2-d2_41dacaa9_68566da1.jpeg?region=0%2C0%2C1536%2C864&width=960'
  },
  {
    name: 'Leia Organa',
    image: 'https://lumiere-a.akamaihd.net/v1/images/leia-organa-feature-image_d0f5e953.jpeg?region=0%2C0%2C1280%2C720&width=960'
  },
  {
    name: 'Darth Vader',
    image: 'https://cdn.catawiki.net/assets/marketing/stories-images/4347-9b40c93cc907345ca2dfdc22545725a0fa21c036-og_image.jpg'
  },
  {
    name: 'Owen Lars',
    image: 'https://lumiere-a.akamaihd.net/v1/images/owen-lars-bio-1_9b5ac94f.jpeg?region=1%2C0%2C1278%2C719&width=960'
  },
  {
    name: 'Beru Whitesun lars',
    image: 'https://vignette.wikia.nocookie.net/starwars/images/8/87/Beru_at_the_dinner_table.png/revision/latest?cb=20170608052511'
  },
  {
    name: 'R5-D4',
    image: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2017/09/R2-D2-and-R5-D4-in-Star-Wars.jpg'
  }
  ,
  {
    name: 'Biggs Darklighter',
    image: 'https://c1.staticflickr.com/8/7408/10153947844_9fe49335e5_b.jpg'
  },
  {
    name: 'Obi-Wan Kenobi',
    image: 'https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864&width=960'
  }
]

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      characterImages: characterImages
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
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
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList characterImages={this.state.characterImages} starwarsChars={this.state.starwarsChars}/>        
      </div>
    );
  }
}

export default App;
