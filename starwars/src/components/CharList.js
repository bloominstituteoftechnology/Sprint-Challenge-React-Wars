import React, { Component } from 'react';

const Chars = props => {
    return <li className={props.char}>{props.name}</li>
}

 const CharList = () => {
    return <div>
    <ul>
    <Chars char='char' name={this.state} />
    </ul>
    </div>
}

export default CharList;