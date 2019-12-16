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
          <p>The Development Team Lead, Jess has vanished. In her absence, the sinister FUNCTIONAL BUG has risen from the ashes of the CI Tool and will not rest until the last developer has been destroyed.
          </p>
          <p>With the support of the QA TEAM, the Software Developer leads a brave RESISTANCE. He is desperate to find his Lead and gain her help in restoring peace and justice to the repository.
          </p>
        
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