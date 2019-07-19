import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import MyCard from "./components/MyCard";
import { Container, Grid, Divider, Input } from 'semantic-ui-react'

const App = () => {

  const [charaData, setCharaData] = useState([])
  const [id, setId] = useState(1);

  useEffect(() => {
    axios 
    .get(`https://swapi.co/api/people/?page=${id}`)
    .then(res => setCharaData(res.data.results))
    .catch(err => console.log("Error. Do I still pass this sprint?"))
  }, [id])

  if (!charaData) { 
    return (
    <h1>Loading...</h1>
    )
  } else {

    return (
      <Container>
         <div className="App">
      <h1 className="Header">Star Wars Body Mass Index (BMI) Index</h1>
      <Divider horizontal>POWERED BY <a href="">SWAPI</a></Divider>
      <div class="ui right icon input"><Input value={id} onChange={e => setId(e.target.value)}/>
      <i class="users icon"></i></div>
      <Grid celled='internally'>

      {charaData.map(chara => <MyCard source={chara} />)}
      </Grid>
        

      </div>
      </Container>
     
    );
  }
}

export default App;
