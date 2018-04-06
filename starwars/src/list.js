import React, { Component } from 'react';
import './App.css';

const List = props => {
    console.log("props", props.data)
    return( <div>{props.data.map(u => {<div>{u.gender}</div>})}</div> )
  }

  export default List;
