import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';


{/* <Next onClick={()=>{   
        
    useEffect(() =>{
        axios
        .get('https://swapi.co/api/people/?page=2')
        .then(response => {
                console.log(response.data.results)
        })
        .catch(error => {
            console.log('Data was not returned', error)
        })
        }, []);

       return null;
       
}
}
/> */}

      

    


export const Next = styled.button`
background-color: #f7e6d4;
width: 15%;
padding: 1%;
font-size: 1.5rem;
`;
