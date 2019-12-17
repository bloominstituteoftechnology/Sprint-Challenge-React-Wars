//import React, {useState, useEffect} from 'react';
import './App.css';
//import StarCard from './components/StarCard';
import axios from 'axios';
//import styles from 'styled-components';
import { gsap } from "gsap";
import React, { Component, useState, useEffect } from "react";
import { Power2, TimelineLite } from "gsap";



// const starApp = () => {
//   const [starList, setStarList] = useState([]);

//   useEffect(() => {
//     axios.get('https://swapi.co/api/people/')
//     .then(res => {
//         setStarList(res.data.results);
//         console.log(res.data.results);
//     })
//     .catch(err => {
//         console.log('Something is wrong', err);
//     })
// }, []);
// }

class App extends Component {

  constructor(props) {
    super(props);
    this.intro = React.createRef();
    this.content = React.createRef();
  }
  componentDidMount() {
    const tl = new TimelineLite();
    tl
      .to(this.intro.current, 4.5, { opacity: 1, delay: 1 })
      .to(this.intro.current, 1.5, { opacity: 0 })
      .to(this.content.current, 200, { top: "-120%" });
  }

//   componentDidMount() {
//     fetch('https://swapi.co/api/people/')
//     .then(res => {
//       setStarList(res.data.results);
//   })
//   .catch(err => {
//       console.log('Something is wrong', err);
//   })
// }, []);

  render() {
    
    return (
      <div className="container">
        <section className="intro" ref={this.intro}>
          <p>
            A long time ago, in a galaxy far,<br /> far away....
          </p>
        </section>
        <section className="crawl">
        <div className="content" ref={this.content}>
          <h1 className="title">Lambda School - WEB26, Jessica Wolff </h1>
          <h2 className="subtitle">THE REACT WAR AWAKENS</h2>
          <p>It's a period of civil war.  The Zoom Daddies spaceship, striking from a hidden base, have won their first victory against the evil CodePen Empire.
          </p>
          <p>During the battle, Daddy spies managed to steal secret plans to the Empire's ultimate weapon, the Fun Bus, an armored space vehicle that reappears every Unit. 
          </p>
          <p>Pursued by the Empire's sinister agents, Princess Lilian races home aboard her starship, custodian of the stolen plans that can save her Daddies, and restore freedom to the galaxy...</p>
        
        </div>
      </section>
      {/* <section> */}
        
        {/* <p>{starList.map(e => (
          <StarCard card={e} />
          ))}</p> */}
      {/* </section> */}
      </div>
    );
  }
}

  // return (
  //   <div className="App">
  //     <h1 className="Header">React Wars</h1>
      //  {starList.map(e => (
      //    <StarCard card={e} />
      // ))} 
  //   </div>
  // );

export default App;