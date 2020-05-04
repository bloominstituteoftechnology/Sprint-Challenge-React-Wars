import React,{ useState } from 'react';
import './inputForm.css';


export default function InputForms(props){

    return(
        <div className="formDiv">
            <label>
                Enter Pokemon Name:
                <input type="text"  onChange={e => props.searcher(e.target.value.toLowerCase())} className="inputBox" />
            </label>
            <button className="searchButton" onClick={props.findPokemon} >Search</button>
        </div>
    );
}