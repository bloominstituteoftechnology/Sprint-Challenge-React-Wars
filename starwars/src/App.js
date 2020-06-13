import React, {useState,useEffect,useRef}from 'react';
import './App.scss';
import Characters from './components/Character'
import axios from 'axios'
import Container from './components/style-componet'
import {Button} from 'reactstrap'
import {TweenMax, TimelineLite, Power3} from 'gsap'


const App = () => {
 
  let app = useRef(null);

  let people = useRef(null)
  
  useEffect(() =>{
    
    let infoButton = people.firstElementChild;
    let peopleName= people.lastElementChild;
    let tl= new TimelineLite()

   TweenMax.to(app, 0, {css:{visibility:'visible'}})

   tl.from(infoButton, 1.2, {y:1280, ease:Power3.easeIn})
  })

  const [characterSelected, setCharter]= useState([])
 
 useEffect (()=>{
  axios.get(`http://swapi.dev/api/people/`)
  .then(res => {
    setCharter(res.data.results)
   
    
  })
 
  .catch(err => {
    debugger
  }) 
   
 },[])

 console.log(characterSelected)
  
  return (
    <div className="App" ref= {element => app=element}>
      <h1 className="Header">Characters</h1>
      <Container className='container'>
      { characterSelected.map(charObj=>{
        return <Characters  key={charObj.name} character= {charObj}   ></Characters>    })}
      </Container>
    </div>
  );

}

export default App;
