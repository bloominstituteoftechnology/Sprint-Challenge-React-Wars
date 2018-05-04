import React, { Component } from 'react';
import Char from './Char';
import CharInfo from './CharInfo';
import CharImage from './CharImage';

class Chars extends Component {
  constructor() {
    super();
    this.state = {
      selected: false, 
      selectedChar: [],
      charImage: []
    };
  }
  componentDidMount = () => {
    this.setState({
      charImage: CharImage,
    })
  }
  handleOpen = (selectedCharName) => {
    let selectedChar = this.props.chars.filter((char) => char.name === selectedCharName)
    this.setState({
      selected:true,
      selectedChar
    })
  }
  handleBlack = () => {
    this.setState({
      selected:false,
      selectedChar: []
    })
  }
  render() {
    const { chars } = this.props
    const { selected, selectedChar, charImage } = this.state
    let selectedCharImageUrl = selected? charImage.filter((obj) => obj.name === selectedChar[0].name)[0].imgUrl : ""
    return (
      <div className="root">
        {
          selected ?
            <CharInfo char={selectedChar[0]} imgUrl={selectedCharImageUrl} handleBack={this.handleBlack}/>
          :
          <div className="char-list">
            {chars.map((char,index) => 
              <Char key={char.name} char={char} charImageObj={charImage[index]} handleOpen={this.handleOpen}/>
            )}
          </div>
        }
      </div>
    );
  }
}

export default Chars;
