import React, { useEffect, useState } from "react";
import axios from "axios";
import Char from "./components/Char"
import styled from "styled-components";


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
    <StyledLayout>
        {data.map(Jedi)}
    </StyledLayout>
 </StyledPage>

  )
}

export default App;

const StyledLayout = styled.div`
  background-color: blue;
  display: flex;
  flex-wrap: wrap;
  max-width: 50%;
`

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`