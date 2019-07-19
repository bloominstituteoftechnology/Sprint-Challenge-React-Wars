import React, { useEffect, useState } from "react";
import { Card, Icon, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
// import '.././';





function ConstructorCard(props){
  // console.log(props);
  
  return (
  <Card>
    <Card.Content>
      <Card.Header>{props.data.name}</Card.Header>
      <Card.Meta>
        <span>Gender: {props.data.gender}</span>
        <div></div>
        <span>Height: {props.data.height}CM</span>
        <div></div>
        <span>Weight: {props.data.mass}KG</span>
        <div></div>
        <span className='date'>Year Born: {props.data.birth_year}</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <p>Homeworld</p>
      {props.data.homeworld}
    </Card.Content>
  </Card>
)
    }

export default ConstructorCard