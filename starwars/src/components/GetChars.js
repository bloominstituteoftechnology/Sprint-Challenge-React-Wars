import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
// import styled from 'styled-components'
import DisplayChars from "./DisplayChars";

export default function GetChars() {
  const [charList, updateCharList] = useState();
  const [pageStart, updatePageStart] = useState(2);
  console.log(charList);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/?page=${pageStart}`)
      .then(res => updateCharList(res.data))

      .catch(err => console.log(err));
  }, [pageStart]);

  function nextPage() {
    console.log("In next page!");
    updatePageStart(pageStart + 1);
  }

  function prevPage() {
    console.log("In prev page!");
    pageStart === 1
      ? updatePageStart(pageStart)
      : updatePageStart(pageStart - 1);
  }

  return !charList ? (
    <div>
      <p>Loading...</p>
      <Loader type="ThreeDots" color="#00BFFF" height="100" width="100" />
    </div>
  ) : (
    <div>
      <div>{<DisplayChars charList={charList.results} />}</div>
      <div>
        {pageStart === 1 ? (
          <button
            type="submit"
            onClick={() => {
              updatePageStart(pageStart + 1);
            }}
          >
            Next Page
          </button>
        ) : (
          <>
            <button
              type="submit"
              onClick={() => {
                pageStart === 1
                  ? updatePageStart(pageStart)
                  : updatePageStart(pageStart - 1);
              }}
            >
              Previous Page
            </button>
            <button
              type="submit"
              onClick={() => {
                updatePageStart(pageStart + 1);
              }}
            >
              Next Page
            </button>
          </>
        )}
      </div>
    </div>
  );
}
