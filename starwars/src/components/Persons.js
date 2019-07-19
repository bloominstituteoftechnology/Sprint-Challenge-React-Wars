import React from "react" 
import './StarWars.css'
// import styled from 'styled-components';
import { StyledH2 } from './PersonsStyles.js'

const Persons = (props) => {
    return (
        <div>
            <StyledH2>{props.name}</StyledH2>
            <div>
                <h3>About Me</h3>
                    <p>Eye Color: {props.eye}</p>
                    <p>Birth Year: {props.birthday}</p>
                    <p>Height: {props.height}</p>
            </div>
        </div>
    )
}

export default Persons