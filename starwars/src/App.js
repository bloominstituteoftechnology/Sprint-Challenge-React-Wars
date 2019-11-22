import React, {useState, useEffect} from 'react';
import './App.css';
import BigCont from './components/BigCont';
import CharCard from "./components/CharCard"
import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [dataArr, setDataArr] = useState([]);


  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
    .then((res) => {
        setDataArr(res.data.results);
    })
    .catch(err => {
        console.log(err);
    })
  },[]);

 console.log(dataArr);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {/* The BigCont div just puts a display flex on the content */}
      <BigCont>
        {dataArr.map(character => {
            return(
                <CharCard 
                name={character.name}
                gender={character.gender}
                />
            )
        })}
      </BigCont>
    </div>
  );
}

export default App;
