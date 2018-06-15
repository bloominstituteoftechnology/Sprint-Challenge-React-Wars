import React from 'react';
import './StarWars.css';
import Input from './Input';

const InputList = props => {
    return (
        <div className="list-wrapper">
           {props.starwarsChars.map(input => (
               <Input
                key={Date.now()}
                input={input}
               />
           ))} 
        </div>
    );
};
export default InputList;