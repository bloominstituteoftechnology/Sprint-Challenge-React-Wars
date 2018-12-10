import React from "react";

const Button = props => {
    return (
        <button className={"button " + props.name} onClick={props.action}>{props.content}</button>
    );
}

export default Button;