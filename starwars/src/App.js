import React, {useEffect, useState} from 'react';
import './App.css';
import { AxiosService } from "./AxiosSevice";

const App = () => {
  const [swItem, setSwItem] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    AxiosService.getSwData().then(swItem => {
      setSwItem(swItem);
      setLoading(false);
    });
  },[]);

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
      {swItem}
    </div>
  );
}

export default App;
