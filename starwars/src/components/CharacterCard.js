import React from "react";

const CharacterCard = props => {
    return(
        <div className = "characters" key={props.key}>
            <h2>Character:{props.name}</h2>
            
            {/* const Buttton = styled.button`
                padding:6px 10px;
                margin: 5px;
                border: none;
                border-radius:3px;
                color: white;
                
                ${props => (props.type === 'primary' ? `background: #2196f3;` :null)}
                ${props => (props.type === 'success' ? `background: #2196f3;` :null)}
                ${props => (props.type === 'danger' ? `background: #2196f3;` :null)}
                ${props => (props.type === 'warning' ? `background: #2196f3;` :null)}
                `; */}
                
        </div>
    );
};
export default CharacterCard;