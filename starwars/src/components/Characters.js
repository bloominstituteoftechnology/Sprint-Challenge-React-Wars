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
      .get(`https://swapi.co/api/people/?page=${props.pageNumber}`)
      .then(response => {
        const data = response.data.results;
        setCharacters(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [props.pageNumber]);

  return (
    <>
      <CardContainer>
        {characters.map((item, key) => {
          return (
            <Card key={key}>
              <Name>{item.name}</Name>
              <Content>
                <p>Gender: {item.gender}</p>
                <p>Birth Year: {item.birth_year}</p>
                <p>Height: {item.height}cm</p>
                <p>Mass: {item.mass}kg</p>
                <p>Hair Color: {item.hair_color}</p>
                <p>Skin Color: {item.skin_color}</p>
                <p>Eye Color: {item.eye_color}</p>
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
