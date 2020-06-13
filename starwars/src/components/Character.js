// Write your Character component here
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'reactstrap';
import styled from 'styled-components';

const Styledh2 = styled.h2`
    color: white;
    background:blue;
    padding: .5rem;
    border-radius: 1rem;
`;

function Character(props){
     
    return(
        <div className="CharContainer">
            <h1>{props.data.name}</h1>
            {/* <h2>{props.data.birth_year}</h2> */}
            {/* <h2>{props.data.hair_color}</h2> */}
            <Alert color="primary">{props.data.birth_year}</Alert>
            <Styledh2>{props.data.hair_color}</Styledh2>
        </div>
    );
}

export default Character;
