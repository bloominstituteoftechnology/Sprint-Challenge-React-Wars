import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import DisplayChars from "./DisplayChars";



export default function GetChars() {
  const [charList, updateCharList] = useState();
  const [pageStart, updatePageStart] = useState(1);

  console.log(pageStart);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/?page=${pageStart}`)
      .then(res => updateCharList(res.data))

      .catch(err => console.log(err));
  }, [pageStart]);

  function getPage(e) {
    e.target.value === "previous"
      ? updatePageStart(pageStart - 1)
      : updatePageStart(pageStart + 1);
  }

  console.log(charList);

  return !charList ? (
    <LoaderContainer className="loader">
      <Loader type="ThreeDots" color="#00BFFF" height="100" width="100" />
    </LoaderContainer>
  ) : (
    <>
      <ButtonsContainer className="buttons-container">
        <PageButton
          className={charList.previous === null ? "none" : "button"}
          onClick={getPage}
          value="previous"
        >
          Previous Page
        </PageButton>

        <PageButton
          className={charList.next === null ? "none" : "button"}
          onClick={getPage}
          value="next"
        >
          Next Page
        </PageButton>
      </ButtonsContainer>

      {<DisplayChars charList={charList.results} />}
    </>
  );
}
