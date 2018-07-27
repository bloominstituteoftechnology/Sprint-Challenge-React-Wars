import React, { Component } from 'react';
import './App.css';
import ToonCard from './components/card';

class App extends Component {
    constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  /**
   * Handle an animation frame
   */
  animFrame() {
    let canvas = this.refs.canvas;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var c = canvas.getContext('2d');
    var numStars = 600;
    var stars = []; //Empty array
    var size = 1;
    var fl = canvas.width;
    var centerX = canvas.width/2;
    var centerY = canvas.height/2;
    var speed = 8;
    for(var i=0; i<numStars; i++) {
      stars[i] = new Star();
    }

    function Star() {
      this.x = Math.random()*canvas.width;    //x axis location
      this.y = Math.random()*canvas.height;    //y axis
      this.z = Math.random()*canvas.width;    //depth of star

    this.move = function(){
      this.z = this.z-speed;
      if(this.z<=0) {
        this.z = canvas.width;
      }
    }

      this.show = function() {
        var x, y, s; //x-axis, y-axis, size
        x = (this.x - centerX) * (fl/this.z);
        x = x + centerX;

        y = (this.y - centerY ) * (fl/this.z);
        y=y+centerY;

        s = size * (fl/this.z);

        c.beginPath();
        c.fillStyle = 'white';
        c.arc(x,y,s, 0, Math.PI*2);
        c.fill();
      }
    }

    function draw() {
      c.fillStyle = 'black';
      c.fillRect(0,0, canvas.width, canvas.height);
      for(var i=0; i<numStars; i++) {
        stars[i].show();
        stars[i].move();
      }
    }

    function update() {
      draw();
      requestAnimationFrame(update);
      //window.requestAnimationFrame(update);
    }

    update();
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
    requestAnimationFrame(() => {this.animFrame()});
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
        console.log(data);
        this.setState({ starwarsChars: data.results });
        
      })
      .catch(err => {
        
      });
  };

  render() {
    return (
      [
      <div className="App">
        <h1 className="Header">Star Wars</h1>
        {this.state.starwarsChars.map(char => {
          return <ToonCard name={char.name} gender={char.gender} height={char.height} weight={char.weight} birth_year={char.birth_year}/>;
        })}
      </div>,<canvas ref="canvas" id="c" style={{zIndex:-1, position:'absolute', top:0, width:'100%', height:'100%'}} />]
    );
  }
}

export default App;
