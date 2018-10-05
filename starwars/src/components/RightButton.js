import React from "react";

const RightButton = props => {
    return (
        <img onClick={props.action} src="./images/right-arrow.png" alt="Previous Card" />
    )
}

export default RightButton;