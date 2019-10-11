import React,{useState} from 'react';
import {Card} from "../components/Styled";

export const StarCard = (props)=> {
     
      return (
        <Card key = {props.key}>
            <h1>{props.name}</h1>
                <p>
                   Birth Year: {props.birth} 
                </p>
                <p>
                   Height: {props.height} 
                </p>
                <p>
                   Mass: {props.mass} 
                </p>
        </Card>
      );
    
  }



  
