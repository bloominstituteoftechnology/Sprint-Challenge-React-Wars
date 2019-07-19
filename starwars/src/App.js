import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import MyCard from "./components/MyCard";
import {
  Menu,
  Container,
  Card,
  Divider,
  Input,
  Message
} from "semantic-ui-react";

const App = () => {
  const [charaData, setCharaData] = useState([]);
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/?page=${id}`)
      .then(res => setCharaData(res.data.results))
      .catch(err => console.log("Error. Do I still pass this sprint?"));
  }, [id]);

  if (!charaData) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <>
        <Menu>
          <Menu.Menu position="right">
            <Menu.Item>
              <Input value={id} onChange={e => setId(e.target.value)} />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Container textAlign="center">
          <div className="App">
            <h1 className="Header">Star Wars Body Mass Index (BMI) Index</h1>
            <Divider horizontal>
              POWERED BY <a href="">SWAPI</a>
            </Divider>
            <Message warning>
              <Message.Header>Not as pretty as I hoped!</Message.Header>
              <p>At least I got to try out Semantic UI.</p>
            </Message>
            <Card.Group centered>
              {charaData.map(chara => (
                <MyCard source={chara} />
              ))}
            </Card.Group>
          </div>
        </Container>
      </>
    );
  }
};

export default App;
