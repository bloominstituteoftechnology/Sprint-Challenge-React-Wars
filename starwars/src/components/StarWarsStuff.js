import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 width: 95%;
 padding: 10px 20px;
 padding-bottom: 5px;
 margin: 10px 0px;
 margin-left: 25px;
 background:rgba(255,255,255,0.6);
 `
 const Cp = styled.p`
 padding: 0px 10px;
 color: blue;
 font-size: 20px;
 `
 const Ch1 = styled.h1`
 padding: 0px 10px;
 font-size: 25px;
 `

 
  const StarWarsStuff = (props) => {
     return (

          <ItemContainer key={props.id}>
             <Ch1>Name: {props.name}</Ch1>
             <Cp>Gender: {props.gender}</Cp>
             <Cp>Birth Year: {props.birth_year}</Cp>
             <Cp>Height: {props.height}</Cp>
             <Cp>Mass: {props.mass}</Cp>
             <Cp>Hair Color: {props.hair}</Cp>
             <Cp>Skin: {props.skin}</Cp>
         </ItemContainer>
     );
 };

  export default StarWarsStuff;