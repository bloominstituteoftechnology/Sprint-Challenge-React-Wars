import React from 'react';

const Button = (props) => {
    return (
        <div className={"button " + props.name} onClick={props.action}>{props.content}</div>
    );
}

export default Button;