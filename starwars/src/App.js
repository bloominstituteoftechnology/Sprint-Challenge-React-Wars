import React, {useState, useEffect} from 'react';
import Characters from "./components/Character";
import './App.css';
import axios from "axios";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

const [swData, setSWData] = useState([]);



useEffect(() => {


  axios.get("https://swapi.py4e.com/api/people")
  .then(res => setSWData(res.data.results))
  // .then(res => console.log(res.data.results))
  .catch(err => console.log("Luke, I am you're father...(Bad End)", err));

}, []);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (<div className="App"> 
   <h1 className="Header">Characters</h1>
      {swData.map( (people, index) => {

return (
          <Characters key={index}  name={people.name} height={people.height} mass={people.mass}  hair={people.hair_color} skin={people.skin_color}  />
)
      })};
     </div>
  )
    };

export default App;
