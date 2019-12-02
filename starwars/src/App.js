import React from 'react';
import './App.css';
import {PeopleList} from './components/people/peopleList.js';

const App = () => {
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <PeopleList />
    </div>
  );
}

export default App;
