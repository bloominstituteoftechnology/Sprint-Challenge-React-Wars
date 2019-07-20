import React, { useEffect, useState } from "react";
import axios from "axios";
import PersonGrid from "./components/PersonGrid"
import ContentButtons from "./components/ContentButtons"
import Buttons from "./components/Buttons"


import './App.css';

const App = () => {

  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [content, setContent] = useState(['people'])


  const pageUp = () => {
    setPage(page => page + 1);
    console.log('Page Up');
  }
  const pageDown = () => {
    setPage(page => page - 1);
    console.log('Page Down');
  }

  const changeContent = (event) => {
    setContent({value: event.target.value});
    console.log('content', content);
  }


  useEffect(() => {
  axios.get(`https://swapi.co/api/${content}/?page=${page}&format=json`)
    .then(response => {
      const charData = response.data.results;
      setData(charData);
    });
}, [page]);

  if (data.length === 0)
    return <div>Now Loading...</div>

  return (
    <div className="App">
      <h1 className="Header">React Wars ({page})</h1>
      <ContentButtons
        content={content}
        changeContent={changeContent}
      />
      <PersonGrid
        charData={data}
       />
      <Buttons
        pageUp={pageUp}
        pageDown={pageDown}
      />
    </div>
  );
}

export default App;
