import React, { Component } from 'react';
import Char from './Char';
import CharInfo from './CharInfo';
import CharImage from './CharImage';

class Chars extends Component {
  constructor() {
    super();
    this.state = {
      selected: false, 
      selectedChar: [{so:"so"}],
      charImage: []
    };
  }
  componentDidMount = () => {
    this.setState({
      charImage: CharImage,
    })
  }
  render() {
    const { chars } = this.props
    const { selected, selectedChar, charImage } = this.state
    let selectedCharImageUrl = selected? charImage.filter((char) => char.name === selectedChar.name).imgUrl : ""
    return (
      <div>
        {
          selected ?
          <div>
            <button>Back</button>
            <CharInfo char={selectedChar} imgUrl={selectedCharImageUrl}/>
          </div>
          :
          <div>
            {chars.map(char => 
              <Char key={char.name} char={char} charImage={charImage}/>
            )}
          </div>
        }
      </div>
    );
  }
}

export default Chars;
