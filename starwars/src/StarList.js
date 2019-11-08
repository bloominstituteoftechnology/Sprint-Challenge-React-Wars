import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StarCard from './StarCard';

function StarList(){
    const [starInfo, setStarInfo] = useState([]);


    useEffect(() => {
        axios 
        .get('https://swapi.co/api/people/1/')
        .then(response => {
            console.log(response);
            setStarInfo(response);
        })
        .catch(error => {
            console.log('Error is: ', error);
        });
    }, []);


    return (
        <div className="starwars-container">
      {
          starInfo.map(info => {
              return (
                <StarCard 
                name ={info.name}
                />
              )
          })
      }

        </div>
    )




}

export default StarList;