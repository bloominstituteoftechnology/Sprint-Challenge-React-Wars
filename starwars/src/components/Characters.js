import React from "react";

const Character = props => {
    return (
        <div className="card">
            <div className="card_header">{props.char.name}</div>
            
            <div className="card_content">
                <h2 className="charDOB">Date of birth: {props.char.birth_year}</h2>
                <h2 className="charSex">{props.char.gender}</h2>

                    <div className="card-content_extra">
                        Eye color: {props.char.eye_color}
                        
                    </div>
            </div> 
        </div>
    );
};