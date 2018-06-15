import React, { Component } from 'react';

const Chars = props => {
    return <li className={props.char}>{props.name}</li>
}

 const CharList = () => {
    return <div>
    <Chars char='char' name={this.item} />
    </div>
}

export default CharList;