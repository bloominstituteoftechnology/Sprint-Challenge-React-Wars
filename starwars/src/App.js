import React, {useState, useEffect} from 'react';
import './App.css';
import StarCard from './components/StarCard';
import axios from 'axios';
import styles from 'styled-components';

const PageDiv = styles.div`
display:flex;
color:white;
flex-wrap:wrap;
align-items:center;
justify-content: center;

.Header{
  width: 100%;
  
}
`

const App = () => {
  const [starList, setStarList] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
    .then(res => {
        setStarList(res.data.results);
        console.log(res.data.results);
        // setStarList(person);
    })
    .catch(err => {
        console.log('Something is wrong', err);
    })
}, []);

  return (
    <PageDiv className="App">
      <h1 className="Header">React Wars</h1>
      {starList.map(e => (
        <StarCard card={e} />
      ))}
    </PageDiv>
  );
}

export default App;