import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from 'react-loader-spinner'
import styled from 'styled-components'
import DisplayCharacters from "./DisplayCharacters";

export default function GetCharacters() {
  const [charList, updateCharList] = useState();
  const [pageStart, updatePageStart] = useState(1);
  console.log(charList);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/?page=${pageStart}`)
      .then(res => updateCharList(res.data))

      .catch(err => console.log(err));
  }, [pageStart]);

  return !charList ? (
    <div>
      <p style={{ color: '#fff', fontSize: '4rem'}}>These Are Not The Droids You Are Looking For...</p>
      <Loader type="Ball-Triangle" color="#f9d71c" height="150" width="150" />
    </div>
  ) : (
    <div>{<DisplayCharacters charList={charList.results} />}</div>
    
  );
}
