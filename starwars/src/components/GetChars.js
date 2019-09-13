import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import DisplayChars from "./DisplayChars";

const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 2rem;
  padding: 0;
  @media screen and (max-width: 400px) {
    justify-content: center;
    .loader {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  div:hover {
    transform: scale(1.05);
  }
`;

const ButtonsContainer = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PageButton = styled.button`
  width: 10rem;
  background-color: #000;
  color: #fff;
  font-weight: 600;
  border: 1px solid #d6c178;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.3),
    0 6px 20px 0 rgba(255, 255, 255, 0.3);
  outline: none;
  margin: 0 2rem;
  padding: 0.5rem 0;

  &:hover {
    background-color: #f17300;
    color: #054a91;
  }

  &:active {
    box-shadow: none;
  }

  @media screen and (max-width: 700px) {
    margin-top: 0.5rem;
  }
`;

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
