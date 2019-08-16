import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";
import { Card, Icon, Button } from "semantic-ui-react";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [page, setPage] = useState(1);
  const [results, setResults] = useState();

  useEffect(() => {
    axios.get(`https://swapi.co/api/people/?page=${page}`).then(response => {
      setResults(response.data.results);
    });
  }, [page]);

  const getCharacters = (num) =>{
    if(num > 0){
      setPage(page+num);
    } else {
      if(page>1){
        setPage(page+num)
      }
    }
  }

  return (
    <div className="App">
      <div className="buttons">
      <Button icon labelPosition="left" onClick={()=>{getCharacters(-1)}}>
        <Icon name="left arrow" />
        Previous
      </Button>
      <Button icon labelPosition="right" onClick={()=>{getCharacters(1)}}>
        Next
        <Icon name="right arrow" />
      </Button>
      </div>
      <Card.Group className="cardgroup">
        {results
          ? results.map((item, index) => {
              return <Character person={item} key={item.name} random={index} />;
            })
          : "Loading..."}
      </Card.Group>
    </div>
  );
};

export default App;
