import React, {useState, useEffect} from 'react'
import Characters from './components/Characters.js'
import axios from 'axios'
import './App.css'
import './components/CharCard.css';

const App = () => {
  const [data, setData] = useState([])
  const grab = () => {
    axios.get('https://swapi.co/api/people/?format=json')
      .then(response =>{
      setData(response.data.results)
      })
      .catch(error => {console.log("Error: Please try again later")}
    )
}

useEffect(grab, [])
console.log(data)

if (data.length === 0 ) return <h1>loading...</h1>

return (
  <div className="App">
    <h1 className="Header">React Wars</h1>
    <div className="Cards">
      {data.map((item, index) => {
       
        return <Characters key = {index} name = {item.name}
        birth_year = {item.birth_year}
        hair_color = {item.hair_color}
        height = {item.height}
        eye_color = {item.eye_color}
        gender = {item.gender} />

      })
      }
      </div>
  </div>
  )
}

export default App;
