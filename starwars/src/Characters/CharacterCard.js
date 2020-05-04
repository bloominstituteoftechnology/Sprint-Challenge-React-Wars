import React from "react";
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import styled from "styled-components"

const Rounded = styled.div`
display: inline-flex;
flex-wrap: wrap;
justify-content: space-between;
`
const CharacterCard = props => {
  return (
    < Rounded className="p-3 bg-info my-2 rounded">
        
    <ListGroupItem className="character-card" key={props.id}>
      <img src = {props.image} className="Profilepic" />
      <ToastHeader>Name: {props.name}</ToastHeader>
      <ToastHeader>Status: {props.status}</ToastHeader>
      <ToastHeader>Species: {props.species}</ToastHeader>
      <ToastHeader>Gender: {props.gender} </ToastHeader>
      <ToastHeader>Origin: {props.origin.name}</ToastHeader>
      <ToastHeader>Location {props.location.name}</ToastHeader>
    </ListGroupItem>
    
    </ Rounded>
  );
};
export default CharacterCard;
