import React from "react";

const LeftButton = props => {
    return (
        <img onClick={props.action} src="./images/left-arrow.png" alt="Previous Card" />
    )
}

export default LeftButton;