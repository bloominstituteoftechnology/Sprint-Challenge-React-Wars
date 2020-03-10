import React, {useEffect, useState} from 'react';
import './App.css';
import { AxiosService } from "./AxiosService";
import Person from './components/Person/Person';

const App = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    AxiosService.getSwData().then(people => {
      setPeople(people);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>...Loading...</div>;
  }
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {people.map((p) => (
        <Person key={p.name} person={p} />
      ))}
    </div>
  );
}

export default App;
