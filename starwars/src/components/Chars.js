import React from "react";
import Card from "./Card";
import "./StarWars.css";

const Chars = props => {
    return (
        <div>
             {props.starwarsChars.map(swchars => <Card key = {swchars.name} swchars = {swchars} />)}
        </div>
    );
}

export default Chars;