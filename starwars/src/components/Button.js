import React, {useState, useEffect} from 'react';
import styled from 'styled-components';


export default function Button(){
    
    useEffect(() =>{
        axios
        .get('https://swapi.co/api/people')
        .then(response => {
                setCharacterInfo(response.data.results)
        })
        .catch(error => {
            console.log('Data was not returned', error)
        })
        }, []);
}
}
      

    


export const Next = styled.button`
background-color: #f7e6d4;
width: 15%;
padding: 1%;
font-size: 1.5rem;
`;
