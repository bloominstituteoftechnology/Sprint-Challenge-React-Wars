import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Characters = props => {
  const [characters, setCharacters] = useState([]);

  const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  `;

  const Card = styled.div`
    display: flex;
    flex-direction: column;
    background: #000;
    color: #fff;
    text-align: left;
    width: 30%;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 5px solid #ffe81f;
    border-radius: 4px;
    box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.5);
  `;

  const Name = styled.h2`
    margin-bottom: 15px;
  `;

  const Content = styled.div`
    p {
      margin: 0 0 10px;
    }
  `;

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people")
      .then(response => {
        const data = response.data.results;
        setCharacters(data);
        console.log(characters);
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <CardContainer>
        {characters.map((item, key) => {
          return (
            <Card key={key}>
              <Name>{item.name}</Name>
              <Content>
                <p>Birth Year: {item.birth_year}</p>
                <p>Height: {item.height}cm</p>
              </Content>
            </Card>
          );
        })}
      </CardContainer>
      ;
    </>
  );
};

export default Characters;
