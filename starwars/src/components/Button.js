import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';


const Next = () =>{

    const handleNext = () => {
        axios
        .get('https://swapi.co/api/people/?page=2')
        .then(response => {
                console.log(response.data.results)
                
        })
        .catch(error => {
            console.log('Data was not returned', error)
        })
        
    }

       return (
           <button onClick={handleNext}>Next</button>
       );
       
}

export default Next;






 

      

    



