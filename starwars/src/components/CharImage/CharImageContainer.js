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
          else if (charObj.name === "Palpatine")
          return <CharImage key={ind+charObj.birth_year} imageName="palpatine" index={ind} selected={this.props.appState.selected} starwarsCharsObj={charObj} onClick={this.props.onClick}/>
          else if (charObj.name === "Han Solo")
          return <CharImage key={ind+charObj.birth_year} imageName="han" index={ind} selected={this.props.appState.selected} starwarsCharsObj={charObj} onClick={this.props.onClick}/>
          else if (charObj.name === "Yoda")
          return <CharImage key={ind+charObj.birth_year} imageName="yoda" index={ind} selected={this.props.appState.selected} starwarsCharsObj={charObj} onClick={this.props.onClick}/>
          else if (charObj.name === "Chewbacca")
          return <CharImage key={ind+charObj.birth_year} imageName="chew" index={ind} selected={this.props.appState.selected} starwarsCharsObj={charObj} onClick={this.props.onClick}/>
          else if (charObj.name === "Ackbar")
          return <CharImage key={ind+charObj.birth_year} imageName="ackbar" index={ind} selected={this.props.appState.selected} starwarsCharsObj={charObj} onClick={this.props.onClick}/>
          else if (charObj.name === "Boba Fett")
          return <CharImage key={ind+charObj.birth_year} imageName="boba" index={ind} selected={this.props.appState.selected} starwarsCharsObj={charObj} onClick={this.props.onClick}/>
          else if (charObj.name === "Greedo")
          return <CharImage key={ind+charObj.birth_year} imageName="greedo" index={ind} selected={this.props.appState.selected} starwarsCharsObj={charObj} onClick={this.props.onClick}/>
          else if (charObj.name === "Wilhuff Tarkin")
          return <CharImage key={ind+charObj.birth_year} imageName="tarkin" index={ind} selected={this.props.appState.selected} starwarsCharsObj={charObj} onClick={this.props.onClick}/>
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