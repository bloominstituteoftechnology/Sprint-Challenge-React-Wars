import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

function People() {
  const [person, setPerson] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(res => {
        console.log(res);
        setPerson(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {person.map(props => {
        return (
          <div>
            <div
              className="name-style"
              style={{
                backgroundColor: "orange",
                width: "50%",
                display: "flex",
                flexDirection: "column"
              }}
            >
              Name: {props.name}
            </div>
            <div
              className="height-style"
              style={{
                backgroundColor: "gray",
                width: "50%",
                display: "flex",
                flexDirection: "column",
                alignContent: 'start'
              }}
            >
              Height: {props.height}
            </div>
            <div
              className="link-style"
              style={{
                backgroundColor: "none",
                width: "50%",
                display: "flex",
                flexDirection: "column"
              }}
            >
              Link:{" "}
              <a href="#" className="link-name">
                {props.homeworld}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default People;
