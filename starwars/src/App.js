import React, {useState, useEffect}from 'react';

import {Row} from "reactstrap"
import Character from './components/Character'
import Axios from 'axios'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [people,setPeople] = useState([])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(()=>{Axios.get('https://rickandmortyapi.com/api/character')
.then(resp=> setPeople(resp.data.results))
.catch(err=>console.log('error', err));
},[]);
console.log(people)
  return (
    <div className="App">
      <h1 className="display-3" className='text-center'>Characters</h1>
      <Row>
            {people.map((peopleInfo=>{
            return <Character image={peopleInfo.image} name={peopleInfo.name} status={peopleInfo.status} species={peopleInfo.species} img={peopleInfo.status} key={peopleInfo.id} gender={peopleInfo.gender}/>
            }))}  
      </Row>
    </div>
  );
}

export default App;
