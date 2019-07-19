import React, { useEffect, useState } from "react";
import PersonCard from "./PersonCard";
import axios from "axios";

import styled from "styled-components"

export default function PersonGrid() {
  const [data, setData] = useState([])

  useEffect(() => {
  axios.get('https://swapi.co/api/people/?page=1&format=json')
    .then(response => {
      const data = response.data.results;
      console.log('data:',data);
      setData(data);

    });
}, []);


  return (
    <div className = "imageGridWrapper">
      <div className="imageGrid">
        {data.map((data, index) =>
          <PersonCard
            key={index}
            name={data.name}
            birthYear={data.birth_year}
            gender={data.gender}
            height={data.height}
            weight={data.mass}
        />)}
      </div>
    </div>
  )
}
