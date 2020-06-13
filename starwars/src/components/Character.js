// Write your Character component here
import React, { useState, useEffect , useRef} from "react"
import {TweenMax,TimelineLite,Power3} from 'gsap'
import {Button} from "reactstrap"
import axios from 'axios'


function Character (props) {
    
    const [details, setCurrentCharacterId] = useState(null)
   
    const openInfo =  async () => {
        const response = await axios.get(
          `http://swapi.dev/api/people/`
        );
    
        setCurrentCharacterId(response.data.results);
      }
       
       

      
  const closeInfo = () => {
    setCurrentCharacterId(null)
  }
  

 

  let people = useRef(null)

  useEffect(() =>{
    
    let infoButton = people.firstElementChild;
    let peopleName= people.lastElementChild;
    let tl= new TimelineLite()

   

   tl.from(infoButton, 1.2, {y:1280, ease:Power3.easeOut})
     .from(people.firstElementChild,2,{scale:1.6,ease:Power3.easeInOut}, .1)
     .from(peopleName, 1.2, {y:1280, ease:Power3.easeOut}, 0)
     .from(peopleName.lastElementChild,2,{scale:1.6,ease:Power3.easeInOut}, .1)
  })
  
    
  
  return(
        <div className='container'style={{width:'100%'}} >
        <div  className='charater' style={{ display: 'flex', justifyContent:'space-evenly'}} ref= {element => people=element} >
          <ul>
           <h2> {props.character.name} </h2>
        <button class="btn btn-outline-primary " style={{width:'15%', alignSelf:'center'}}onClick={() => openInfo(props.character.id)}  >{props.character.birth_year}</button>
        </ul>
        
        {
            details &&
            <>
            <ul >
            <h3> {props.character.name}</h3>
            <li>{props.character.name}  is {props.character.height}cm tall</li>
            </ul>
            
            </>
        }
        <ul  >
        <button   class="btn btn-outline-warning "  onClick={closeInfo}>Close</button>
        </ul>
        </div>   
        </div>
    )
}

export default Character