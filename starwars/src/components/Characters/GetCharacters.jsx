import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from 'react-loader-spinner'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import DisplayCharacters from "./DisplayCharacters";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));


export default function GetCharacters() {
  const [charList, updateCharList] = useState();
  const [pageStart, updatePageStart] = useState(2);
  console.log(charList);

  useEffect(() => {
    axios
    // Fetching StarWars Data
      .get(`https://swapi.co/api/people/?page=${pageStart}`)
      .then(res => updateCharList(res.data))

      .catch(err => console.log(err));
  }, [pageStart]);

  // Button Function To Get Next Page
  function nextPage() {
    console.log("In next page!");
    updatePageStart(pageStart + 1);
  }

  // Button Function To Get Previous Page
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
      <div>{<DisplayCharacters charList={charList.results} />}</div>
      <div>
        {pageStart === 1 ? (
          <button style ={{width: "100px", background: "yellow"}}
            type="submit"
            onClick={() => {
              updatePageStart(pageStart + 1);
            }}
          >
            Next Page
          </button>
        ) : (
          <>
          
            <button variant="contained" color="secondary" 
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