import React from 'react';
import StyledList from './StyledList';

function NavBar(props) {
    const gender = props.obj.gender === 'n/a' ? '': props.obj.gender;
    const eye_color = props.obj.eye_color === 'n/a' ? "":props.obj.eye_color;
    const hair =  props.obj.hair_color === 'n/a'? '': props.obj.hair_color;
    return (
            <StyledList className="navbar">
                <div className="char title">{props.obj.name} </div> 
                <div className="char"> {gender}</div> 
                <div className="char"> {eye_color} </div> 
                <div className="char"> {hair} </div>
                <div className="char"> { props.obj.height} </div> 
                <div className="char"> { props.obj.mass} </div> 
            </StyledList >

            );
    }

export default NavBar;