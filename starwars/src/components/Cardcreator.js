import React from 'react';
import styled from "styled-components";

const DivOne = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    
    background-image:url("https://images.pexels.com/photos/1643113/pexels-photo-1643113.jpeg?cs=srgb&dl=brown-mountains-1643113.jpg&fm=jpg");
    background-repeat:no-repeat;
    
`;

const DivTwo = styled.div`
&:hover{ 
    transform: scale(2); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */

background-image:url("https://images.pexels.com/photos/3384692/pexels-photo-3384692.jpeg?cs=srgb&dl=viewing-northern-lights-3384692.jpg&fm=jpg")
}
transition: transform .6s; /* Animation */
border: solid;
width: 20%;
margin: 5%;
background-image: url("https://images.pexels.com/photos/73873/star-clusters-rosette-nebula-star-galaxies-73873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
border-radius: 10px;
font-size:10px;
color: #37ff00;
  text-shadow: 1px 1px 5px #fff;
`;


const HONE = styled.h1 `


`


const Cardcreator = props => {
    return (
        <DivOne>
            <DivTwo>
                <HONE>{props.apidata.name}</HONE>
                <h3>birth year:{props.apidata.birth_year}</h3>
                <h3>eye color:{props.apidata.eye_color}</h3>
                <h3>gender:{props.apidata.gender}</h3>
            </DivTwo>
        </DivOne>
        
    );
}

export default Cardcreator;