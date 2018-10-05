import React from "react";
import Header from "./Header";
import Body from "./Body";

const Character = (props) => {
    return (
            <div className="item-box">
                <Header character={props} />
                <Body character={props} />
            </div>
    )
}

export default Character;