import React from "react";
import './StarWars.css';

const Paginator = props => {
    return (
        <div className="paginator">
            <button onClick={() => { props.pageHandler("prev") }}><i class="fas fa-long-arrow-alt-left"></i>&nbsp;Prev</button>
            <button onClick={() => { props.pageHandler("next") }}>Next&nbsp;<i class="fas fa-long-arrow-alt-right"></i></button>
        </div>
    )
}

export default Paginator;