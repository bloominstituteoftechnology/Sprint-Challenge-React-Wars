import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StarCard from './StarCard';

function StarList() {
    const [starInfo, setStarInfo] = useState([]);


    useEffect(() => {
        axios
            .get('https://swapi.co/api/people/')
            .then(response => {
                console.log(response.data.results);
                setStarInfo(response.data.results);
            })
            .catch(error => {
                console.log('Error is: ', error);
            });
    }, []);

    return (
        <div>
            {
                starInfo.map((info, index) => {
                    return (
                        <StarCard
                            key = { index }
                            information = { info }
                        />
                    )
                })
            }
        </div>
    )
}

export default StarList;