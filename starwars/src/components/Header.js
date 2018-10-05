import React from "react";

const Header = (props) => {
    console.log(props.character)
    return (
        <div className="header">
            <h1>{props.character.name}</h1>
            <h3>hometown: {props.character.home}</h3>
        </div>
        )
}

export default Header;