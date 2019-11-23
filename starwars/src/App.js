import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import { Row, Col, Button } from 'reactstrap';
import Character from './components/Character';



const App = () => {

const [endpoint, setEndpoint] = useState ('https://swapi.co/api/people/')
const [apiData, setApiData] = useState(null);


useEffect(() => {
  axios
  .get(endpoint)
  .then(response => {
    console.log(response.data);
    setApiData(response.data);
  })
  .catch(err => console.log(err));
}, [endpoint]); 



// Transport Buttons functionality
const next = () => {
  console.log(apiData.next);
  setEndpoint(apiData.next);
};

const previous = () => {
  if (apiData.previous) {
    setEndpoint(apiData.previous);
  } else {
    console.log("no previous page exists");
  }
};




  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Row className="justify-content-center">
        <Col sm="6" md="5" lg="3" xl="2">
        <Button color="success" onClick={() => previous()} className="m-5">Prev page</Button>
        </Col>
        <Col sm="6" md="5" lg="3" xl="2">
        <Button color="success" onClick={() => next()} className="m-5"  >Next Page</Button>
        </Col>
      </Row>
   
  


      
    </div >
  );
}



export default App;
