import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Character from './components/Character';
import styled from 'styled-components';

// starwarsapi="https://lambda-github-api-server.herokuapp.com/";
const App = () => {
  const [Personnage, setPersonnage] = useState([]);
  
  useEffect(() => {
    axios
    .get("https://lambda-github-api-server.herokuapp.com/")
    .then(response  => {
    setPersonnage(response.data.results)

    console.log(response.data.results);

    }, [])

    .catch(error => {
        console.log("Error", error);
    })
  }, []);

  const Structure = styled.div`
  width: 80vw;
  margin: 0 auto;
  `
  
  return (
    <div>
    <Structure>
    {Personnage.map((personnage) =>
            <Character
              name={personnage.name}
              birth_year={personnage.birth_year}
              eye_color={personnage.eye_color}
              hair_color={personnage.hair_color}
              height={personnage.height}
              mass={personnage.mass}
              />
            )}
    </Structure>
    </div>
  );
}

export default App;