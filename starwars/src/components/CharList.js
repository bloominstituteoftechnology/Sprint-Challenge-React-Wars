import React from "react";

const CharList = props => {
    return (
        <div className="charList">
            {props.bios.map((item, index) => 
            <div key={index}>
                <strong>Name:</strong> {item.name} 
            </div>
                
            )}
            

        </div>

    )
}

export default CharList