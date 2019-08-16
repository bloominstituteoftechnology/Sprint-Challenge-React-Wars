import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Char from './components/Char'
import styled from 'styled-components';


const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
      const fetchData = () => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
       
        setData(response.data.results)
        console.log(response.data);
          })

      .catch(
        error => console.log(error)
      )
      }
      fetchData();
  }, [] 
  )

  function Jedi(obj) {
    return <Char 

        name={obj.name}
        mass={obj.mass}
        height={obj.height}
        gender={obj.gender}
        year={obj.birth_year}
        skin_color={obj.skin_color} />
  }

  return (
<StyledPage>
        <Styledh1>Star Wars Characters</Styledh1>
        <p>Here's a few facts about my favorite Star Wars character</p>
        <StyledContain>
        {data.map(Jedi)}
        </StyledContain>
</StyledPage>
  )
}

export default App;

const StyledPage = styled.div`
  width: 100vh;
  height: 100%;
`


const StyledContain = styled.div`
    background-color: white;
    border: 1px solid #DBDFE2;
    border-radius: 5px;
    width: 400px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px 0px;
   
`

const Styledh1 = styled.div`
  font-size: 24px;
  color: #222b34;
  line-height: 30px;
  font-weight: 900;
  font-family: system-ui;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

`

const StyledP = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #58626d;
  font-family: system-ui;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400l
`