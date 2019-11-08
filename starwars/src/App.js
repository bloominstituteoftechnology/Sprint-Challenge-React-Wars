import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import {Jumbotron, Container} from 'reactstrap';
import './App.css';

import CharDisplay from './components/Char/CharDisplay';
import Pages from './components/Char/Pages';
import CharSearch from './components/Char/CharSearch';

// styling
const SContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SJumbotron = styled(Jumbotron)`
  opacity: .8;
  background: #696969;
  margin: 10px;
`;
// figure out how to make opacity work


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [page, setPage] = useState("1");
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(0);
  const [name, setName] = useState({});
  // needs to contain name, page, index

  useEffect(() => {
    Axios.get(`https://swapi.co/api/people`)
      .then(res => {
        console.log(res.data.results);
        setData([...data, res.data.results]);
// change & save page logic
        if (res.data.next !== null) {
          setPage((page*1 + 1).toString());
        } else {
          setPage("1");
        }

      })

      .catch(err => {
        console.log(err)
      })

  }, [])

  useEffect(() => {
    if (parseInt(page) > 1) {
      Axios.get(`https://swapi.co/api/people/?page=${page}`)
      .then(res => {

        setData([...data, res.data.results]);
// change & save page logic
        if (res.data.next !== null) {
          setPage((page*1 + 1).toString());
        } else {
          setPage("1");
        }

      })

      .catch(err => {
        console.log(err);
      })

    } else {
      console.log("Page 1");
    }

  }, [page])

  // console.log(data, "data format"); // data[0], [1], [2], etc === arrays of characters

  return (
    <SContainer>
      <div className="App">
        <h1 className="Header">React Wars</h1>
      </div>
      <Pages current={current} setCurrent={setCurrent} data={data} />
      <CharSearch name={name} setName={setName} data={data} />
      <SJumbotron>
        {
          data.map((d, i) => (

              <CharDisplay data={d} key={i} i={i} current={current} setCurrent={setCurrent} />

          ))
        }
      </SJumbotron>
    </SContainer>
  );
}

export default App;

// additional functionality
