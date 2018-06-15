import React, { Component } from 'react';
import CharImage from "./CharImage";
import './CharImage.css'

class CharImageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="char-image-container">
        {this.props.appState.starwarsChars.map( (charObj,ind) => {
          if (charObj.name === "Darth Vader")
          return <CharImage key={ind+charObj.birth_year} imageName="darth" index={ind} selected={this.props.appState.selected} starwarsCharsObj={charObj} onClick={this.props.onClick}/>
          else if (charObj.name === "Luke Skywalker")
          return <CharImage key={ind+charObj.birth_year} imageName="luke" index={ind} selected={this.props.appState.selected} starwarsCharsObj={charObj} onClick={this.props.onClick}/>
          else if (charObj.name === "C-3PO")
          return <CharImage key={ind+charObj.birth_year} imageName="c3po" index={ind} selected={this.props.appState.selected} starwarsCharsObj={charObj} onClick={this.props.onClick}/>
          else if (charObj.name === "R2-D2")
          return <CharImage key={ind+charObj.birth_year} imageName="r2d2" index={ind} selected={this.props.appState.selected} starwarsCharsObj={charObj} onClick={this.props.onClick}/>
          else if (charObj.name === "Leia Organa")
          return <CharImage key={ind+charObj.birth_year} imageName="leia" index={ind} selected={this.props.appState.selected} starwarsCharsObj={charObj} onClick={this.props.onClick}/>
          else if (charObj.name === "Obi-Wan Kenobi")
          return <CharImage key={ind+charObj.birth_year} imageName="obi" index={ind} selected={this.props.appState.selected} starwarsCharsObj={charObj} onClick={this.props.onClick}/>
        })}
        {/* <CharImage appState={this.props.appState} onClick={this.props.onClick}/>
        <CharImage appState={this.props.appState} onClick={this.props.onClick}/>
        <CharImage appState={this.props.appState} onClick={this.props.onClick}/>
        <CharImage appState={this.props.appState} onClick={this.props.onClick}/>
        <CharImage appState={this.props.appState} onClick={this.props.onClick}/>
        <CharImage appState={this.props.appState} onClick={this.props.onClick}/> */}
      </div>
     )
  }
}
 
export default CharImageContainer;