import React, { Component } from 'react';

const myData = this.props.starwarsChars;

const listItems = myData.map((d) => <li key={d.name}>{d.name}</li>)

export default listItems