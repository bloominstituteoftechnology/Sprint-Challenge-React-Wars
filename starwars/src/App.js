import React from 'react';
import Character from "./components/Character";
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    const getCharacters = async () => {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/"
      );
      const jsonResponse = await response.json();
      setCharacters(jsonResponse.results);
    };

    getCharacters();
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
     {characters.map((results, index) => {
        return <Character character={results} key={index} />;
      })}
    </div>
  );
}

export default App;
