import React from "react";

const CharList = props => {
    return (
        <div className="CharList">
            {props.bios.map(item => 
            <h2>
                Name: {item.name}
            </h2>
            
            )}
            

        </div>
    )
}

export default CharList