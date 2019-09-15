import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Character from './components/Character';
import Footer from './components/footer';
import Header from './components/header';
import styled from 'styled-components';

// starwarsapi="https://lambda-github-api-server.herokuapp.com/";

const App = () => {
  const [Personnage, setPersonnage] = useState([]);
  
  useEffect(() => {
    axios
    .get("https://lambda-github-api-server.herokuapp.com/")
    .then(response  => {
    setPersonnage(response.data.results)

    // console.log(response.data.results);

    }, [])

    .catch(error => {
        console.log("Error", error);
    })
  }, []);

//   const Structure = styled.div`
//   border: 5px solid red;
//   width: 80vw;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-evenly;
//   background: black;
// `

  return (
    <div>
    <Header>
    </Header>
    {/* <Structure> */}
    {Personnage.map((personnage) =>
            <Character
              name={personnage.name}
              birth_year={personnage.birth_year}
              eye_color={personnage.eye_color}
              hair_color={personnage.hair_color}
              height={personnage.height}
              gender={personnage.gender}
              mass={personnage.mass}
              />
            )}
    {/* </Structure> */}
    <Footer>
    </Footer>
    </div>
  );
}

export default App;