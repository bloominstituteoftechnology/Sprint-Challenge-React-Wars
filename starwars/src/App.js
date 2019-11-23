import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import TransposeButtons from './components/TransposeButtons';
// import Test from "./components/Test"


const App = () => {

const [endpoint, setEndpoint] = useState ('https://swapi.co/api/people/')
const [apiData, setApiData] = useState();
 
useEffect(() => {
  axios
  .get(endpoint)
  .then(response => {
    console.log(response.data);
    setApiData(response.data);
  })
  .catch(err => console.log(err));
}, [endpoint]); 


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {/* <Test/> */}
      <TransposeButtons/>
    </div>
  );
}

export default App;
