// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";
//import styled from "styled-components";

//import styled from "styled-components";

const Content = (props) => {
  return (
    <span className="Elaborate" key={props.name}>
      <h1> Name: {props.name}</h1>
      <h1>Title:{props.title}</h1>
      <h2>Diameter: {props.diameter}</h2>

      <p>Rotation: {props.rotation_period}</p>

      <img src={props.residents} alt={props.alt} />
    </span>
  );
};

const Character = () => {
  const [text, setTest] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.py4e.com/api/planets/1/`)
      .then((response) => {
        console.log("the Response" + response.data);
        setTest(response.data);
      }) //close response
      .catch((err) => console.log(err)); //close error
  }, []);

  return (
    <div className="content">
      <span>
        <Content
          name={text.name}
          diameter={text.diameter}
          title={text.title}
          rotation={text.rotation_period}
          population={text.population}
          residents={text.residents}
          terrain={text.terrain}
        />
      </span>
    </div>
  );
};

export default Character;

//
// "name": "Tatooine",
// "rotation_period": "23",
// "orbital_period": "304",
// "diameter": "10465",
// "climate": "arid",
// "gravity": "1 standard",
// "terrain": "desert",
// "surface_water": "1",
// "population": "200000",
// "residents": [
//     "https://swapi.py4e.com/api/people/1/",
//     "https://swapi.py4e.com/api/people/2/",
//     "https://swapi.py4e.com/api/people/4/",
//     "https://swapi.py4e.com/api/people/6/",
//     "https://swapi.py4e.com/api/people/7/",
//     "https://swapi.py4e.com/api/people/8/",
//     "https://swapi.py4e.com/api/people/9/",
//     "https://swapi.py4e.com/api/people/11/",
//     "https://swapi.py4e.com/api/people/43/",
//     "https://swapi.py4e.com/api/people/62/"
// ],
// "films": [
//     "https://swapi.py4e.com/api/films/1/",
//     "https://swapi.py4e.com/api/films/3/",
//     "https://swapi.py4e.com/api/films/4/",
//     "https://swapi.py4e.com/api/films/5/",
//     "https://swapi.py4e.com/api/films/6/"
// ],
// "created": "2014-12-09T13:50:49.641000Z",
// "edited": "2014-12-20T20:58:18.411000Z",
// "url": "https://swapi.py4e.com/api/planets/1/"
// }
//
