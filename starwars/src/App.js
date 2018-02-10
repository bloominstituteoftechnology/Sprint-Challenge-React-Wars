import React, { Component } from 'react';
import './App.css';
import Carousel from './Carousel/carousel';
import Char from './Charactors/charactors';
import Assets from './Assets/assets';


class App extends Component {
  constructor() {
    super();
    this.state = {
      chars: [],
      currentChar: {name: 'Luke Skywalker', starships:[], vehicles:[], planets:[]},
      currentAsset: 'starships',
      asset: [],
    };
  }
  componentDidMount() {
    console.log('will mount');
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch('https://swapi.co/api/people')

      .then(res => {
        return res.json();
      })
      .then(data => {
            console.log('gotdata');
        this.setState({ chars: data.results, currentChar: data.results[0] });
      })
      .catch(err => {
        throw new Error(err);
      });

  }

                handleChar = (name)=>{

                  let temp = this.state.chars.find((char)=>{
                    return char.name === name;
                  });
                  this.setState({currentChar: temp});
                }



                handleAsset = (assetName)=>{

    console.log(this.state.currentChar[assetName]);
                  let assetData = [];


               if(assetName ==='homeworld'){



                       // fetch(this.state.currentChar[assetName]).then(res =>{
                       //   return res.json();
                       // }).then(data => {
                       //  console.log(data); return;
                       //   assetData.push(data);
                         
                       // }).catch(err => {
                       //   throw new Error(err);
                       // });

               }else{
                   this.state.currentChar[assetName].forEach((url)=>{

                       fetch(url).then(res => {
                         return res.json();
                       }).then(data => {
                         assetData.push(data);
                         
                       }).catch(err => {
                         throw new Error(err);
                       });
                  });
                  
               }


              
                 
                     console.log(assetData);
                }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Carousel chars={this.state.chars} handleChar={this.handleChar}/>
        <Char char={this.state.currentChar} handleAsset={this.handleAsset}/>
        <Assets />
      </div>
    );
  }
}

export default App;
