import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Card from "./components/Card";


const App = () => {

  const [charaData, setCharaData] = useState([])

  const fetchData = () => {
    axios 
    .get("https://swapi.co/api/people/?page=1")
    .then(res => setCharaData(res.data.results))
    .catch(err => console.log("Error. Do I still pass this sprint?"))
  }

  useEffect(() => {
    fetchData();
  }, [])

  console.log(charaData)

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
