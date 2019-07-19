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

  if (!charaData) { 
    return (
    <h1>Loading...</h1>
    )
  } else {

    return (
      <div className="App">
        <h1 className="Header">Star Wars Body Mass Index (BMI)</h1>

        {charaData.map(chara => <Card source={chara} />)}
      </div>
    );
  }
}

export default App;
